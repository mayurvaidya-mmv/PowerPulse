'use strict';

var utilFormatUrl = require('@aws-sdk/util-format-url');
var middlewareEndpoint = require('@smithy/middleware-endpoint');
var protocolHttp = require('@smithy/protocol-http');
var signatureV4 = require('@smithy/signature-v4');
var smithyClient = require('@smithy/smithy-client');

const version = "2016-11-15";
function copySnapshotPresignedUrlMiddleware(options) {
    return (next, context) => async (args) => {
        const { input } = args;
        if (!input.PresignedUrl) {
            const destinationRegion = await options.region();
            const endpoint = await middlewareEndpoint.getEndpointFromInstructions(input, {
                getEndpointParameterInstructions() {
                    return {
                        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
                        Endpoint: { type: "builtInParams", name: "endpoint" },
                        Region: { type: "builtInParams", name: "region" },
                        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
                    };
                },
            }, {
                ...options,
                region: input.SourceRegion,
            });
            const resolvedEndpoint = typeof options.endpoint === "function" ? await options.endpoint() : middlewareEndpoint.toEndpointV1(endpoint);
            const requestToSign = new protocolHttp.HttpRequest({
                ...resolvedEndpoint,
                protocol: "https",
                headers: {
                    host: resolvedEndpoint.hostname,
                },
                query: {
                    ...Object.entries(input).reduce((acc, [k, v]) => {
                        acc[k] = String(v ?? "");
                        return acc;
                    }, {}),
                    Action: "CopySnapshot",
                    Version: version,
                    DestinationRegion: destinationRegion,
                },
            });
            const signer = new signatureV4.SignatureV4({
                credentials: options.credentials,
                region: input.SourceRegion,
                service: "ec2",
                sha256: options.sha256,
                uriEscapePath: options.signingEscapePath,
            });
            const presignedRequest = await signer.presign(requestToSign, {
                expiresIn: 3600,
            });
            args = {
                ...args,
                input: {
                    ...args.input,
                    DestinationRegion: destinationRegion,
                    PresignedUrl: utilFormatUrl.formatUrl(presignedRequest),
                },
            };
            if (protocolHttp.HttpRequest.isInstance(args.request)) {
                const { request } = args;
                if (!(request.body ?? "").includes("DestinationRegion=")) {
                    request.body += `&DestinationRegion=${destinationRegion}`;
                }
                if (!(request.body ?? "").includes("PresignedUrl=")) {
                    request.body += `&PresignedUrl=${smithyClient.extendedEncodeURIComponent(args.input.PresignedUrl)}`;
                }
            }
        }
        return next(args);
    };
}
const copySnapshotPresignedUrlMiddlewareOptions = {
    step: "serialize",
    tags: ["CROSS_REGION_PRESIGNED_URL"],
    name: "crossRegionPresignedUrlMiddleware",
    override: true,
    relation: "after",
    toMiddleware: "endpointV2Middleware",
};
const getCopySnapshotPresignedUrlPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(copySnapshotPresignedUrlMiddleware(config), copySnapshotPresignedUrlMiddlewareOptions);
    },
});

exports.copySnapshotPresignedUrlMiddleware = copySnapshotPresignedUrlMiddleware;
exports.copySnapshotPresignedUrlMiddlewareOptions = copySnapshotPresignedUrlMiddlewareOptions;
exports.getCopySnapshotPresignedUrlPlugin = getCopySnapshotPresignedUrlPlugin;
