import { AwsEc2QueryProtocol } from "@aws-sdk/core/protocols";
import { EC2ClientConfig } from "./EC2Client";
export declare const getRuntimeConfig: (config: EC2ClientConfig) => {
  apiVersion: string;
  base64Decoder: import("@smithy/types").Decoder;
  base64Encoder: (_input: Uint8Array | string) => string;
  disableHostPrefix: boolean;
  endpointProvider: (
    endpointParams: import("./endpoint/EndpointParameters").EndpointParameters,
    context?: {
      logger?: import("@smithy/types").Logger;
    }
  ) => import("@smithy/types").EndpointV2;
  extensions: import("./runtimeExtensions").RuntimeExtension[];
  httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").EC2HttpAuthSchemeProvider;
  httpAuthSchemes: import("@smithy/types").HttpAuthScheme[];
  logger: import("@smithy/types").Logger;
  protocol:
    | import("@smithy/types").ClientProtocol<any, any>
    | import("@smithy/types").ClientProtocolCtor<any, any>
    | typeof AwsEc2QueryProtocol;
  protocolSettings: {
    [setting: string]: unknown;
    defaultNamespace?: string;
  };
  serviceId: string;
  urlParser: import("@smithy/types").UrlParser;
  utf8Decoder: import("@smithy/types").Decoder;
  utf8Encoder: (input: Uint8Array | string) => string;
};
