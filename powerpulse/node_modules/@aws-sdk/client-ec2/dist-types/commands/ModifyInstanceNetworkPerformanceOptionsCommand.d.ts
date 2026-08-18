import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { ModifyInstanceNetworkPerformanceRequest, ModifyInstanceNetworkPerformanceResult } from "../models/models_6";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceNetworkPerformanceOptionsCommand}.
 */
export interface ModifyInstanceNetworkPerformanceOptionsCommandInput extends ModifyInstanceNetworkPerformanceRequest {
}
/**
 * @public
 *
 * The output of {@link ModifyInstanceNetworkPerformanceOptionsCommand}.
 */
export interface ModifyInstanceNetworkPerformanceOptionsCommandOutput extends ModifyInstanceNetworkPerformanceResult, __MetadataBearer {
}
declare const ModifyInstanceNetworkPerformanceOptionsCommand_base: {
    new (input: ModifyInstanceNetworkPerformanceOptionsCommandInput): import("@smithy/smithy-client").CommandImpl<ModifyInstanceNetworkPerformanceOptionsCommandInput, ModifyInstanceNetworkPerformanceOptionsCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: ModifyInstanceNetworkPerformanceOptionsCommandInput): import("@smithy/smithy-client").CommandImpl<ModifyInstanceNetworkPerformanceOptionsCommandInput, ModifyInstanceNetworkPerformanceOptionsCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Change the configuration of the network performance options for an existing
 *             instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceNetworkPerformanceOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceNetworkPerformanceOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceNetworkPerformanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   BandwidthWeighting: "default" || "vpc-1" || "ebs-1", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceNetworkPerformanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceNetworkPerformanceResult
 * //   InstanceId: "STRING_VALUE",
 * //   BandwidthWeighting: "default" || "vpc-1" || "ebs-1",
 * // };
 *
 * ```
 *
 * @param ModifyInstanceNetworkPerformanceOptionsCommandInput - {@link ModifyInstanceNetworkPerformanceOptionsCommandInput}
 * @returns {@link ModifyInstanceNetworkPerformanceOptionsCommandOutput}
 * @see {@link ModifyInstanceNetworkPerformanceOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceNetworkPerformanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class ModifyInstanceNetworkPerformanceOptionsCommand extends ModifyInstanceNetworkPerformanceOptionsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ModifyInstanceNetworkPerformanceRequest;
            output: ModifyInstanceNetworkPerformanceResult;
        };
        sdk: {
            input: ModifyInstanceNetworkPerformanceOptionsCommandInput;
            output: ModifyInstanceNetworkPerformanceOptionsCommandOutput;
        };
    };
}
