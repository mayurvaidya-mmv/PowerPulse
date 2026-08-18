import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { GetIpamPrefixListResolverVersionEntriesRequest, GetIpamPrefixListResolverVersionEntriesResult } from "../models/models_6";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPrefixListResolverVersionEntriesCommand}.
 */
export interface GetIpamPrefixListResolverVersionEntriesCommandInput extends GetIpamPrefixListResolverVersionEntriesRequest {
}
/**
 * @public
 *
 * The output of {@link GetIpamPrefixListResolverVersionEntriesCommand}.
 */
export interface GetIpamPrefixListResolverVersionEntriesCommandOutput extends GetIpamPrefixListResolverVersionEntriesResult, __MetadataBearer {
}
declare const GetIpamPrefixListResolverVersionEntriesCommand_base: {
    new (input: GetIpamPrefixListResolverVersionEntriesCommandInput): import("@smithy/smithy-client").CommandImpl<GetIpamPrefixListResolverVersionEntriesCommandInput, GetIpamPrefixListResolverVersionEntriesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetIpamPrefixListResolverVersionEntriesCommandInput): import("@smithy/smithy-client").CommandImpl<GetIpamPrefixListResolverVersionEntriesCommandInput, GetIpamPrefixListResolverVersionEntriesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Retrieves the CIDR entries for a specific version of an IPAM prefix list resolver. This shows the actual CIDRs that were selected and synchronized at a particular point in time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPrefixListResolverVersionEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPrefixListResolverVersionEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPrefixListResolverVersionEntriesRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverId: "STRING_VALUE", // required
 *   IpamPrefixListResolverVersion: Number("long"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamPrefixListResolverVersionEntriesCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPrefixListResolverVersionEntriesResult
 * //   Entries: [ // IpamPrefixListResolverVersionEntrySet
 * //     { // IpamPrefixListResolverVersionEntry
 * //       Cidr: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPrefixListResolverVersionEntriesCommandInput - {@link GetIpamPrefixListResolverVersionEntriesCommandInput}
 * @returns {@link GetIpamPrefixListResolverVersionEntriesCommandOutput}
 * @see {@link GetIpamPrefixListResolverVersionEntriesCommandInput} for command's `input` shape.
 * @see {@link GetIpamPrefixListResolverVersionEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class GetIpamPrefixListResolverVersionEntriesCommand extends GetIpamPrefixListResolverVersionEntriesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetIpamPrefixListResolverVersionEntriesRequest;
            output: GetIpamPrefixListResolverVersionEntriesResult;
        };
        sdk: {
            input: GetIpamPrefixListResolverVersionEntriesCommandInput;
            output: GetIpamPrefixListResolverVersionEntriesCommandOutput;
        };
    };
}
