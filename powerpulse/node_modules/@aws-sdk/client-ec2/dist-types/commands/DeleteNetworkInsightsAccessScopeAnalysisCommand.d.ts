import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeleteNetworkInsightsAccessScopeAnalysisRequest, DeleteNetworkInsightsAccessScopeAnalysisResult } from "../models/models_2";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisCommandInput extends DeleteNetworkInsightsAccessScopeAnalysisRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisCommandOutput extends DeleteNetworkInsightsAccessScopeAnalysisResult, __MetadataBearer {
}
declare const DeleteNetworkInsightsAccessScopeAnalysisCommand_base: {
    new (input: DeleteNetworkInsightsAccessScopeAnalysisCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteNetworkInsightsAccessScopeAnalysisCommandInput, DeleteNetworkInsightsAccessScopeAnalysisCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteNetworkInsightsAccessScopeAnalysisCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteNetworkInsightsAccessScopeAnalysisCommandInput, DeleteNetworkInsightsAccessScopeAnalysisCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified Network Access Scope analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAccessScopeAnalysisRequest
 *   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteNetworkInsightsAccessScopeAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAccessScopeAnalysisResult
 * //   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAccessScopeAnalysisCommandInput - {@link DeleteNetworkInsightsAccessScopeAnalysisCommandInput}
 * @returns {@link DeleteNetworkInsightsAccessScopeAnalysisCommandOutput}
 * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DeleteNetworkInsightsAccessScopeAnalysisCommand extends DeleteNetworkInsightsAccessScopeAnalysisCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteNetworkInsightsAccessScopeAnalysisRequest;
            output: DeleteNetworkInsightsAccessScopeAnalysisResult;
        };
        sdk: {
            input: DeleteNetworkInsightsAccessScopeAnalysisCommandInput;
            output: DeleteNetworkInsightsAccessScopeAnalysisCommandOutput;
        };
    };
}
