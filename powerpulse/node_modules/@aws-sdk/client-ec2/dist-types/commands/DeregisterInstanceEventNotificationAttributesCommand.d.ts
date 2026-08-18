import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeregisterInstanceEventNotificationAttributesRequest, DeregisterInstanceEventNotificationAttributesResult } from "../models/models_3";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstanceEventNotificationAttributesCommand}.
 */
export interface DeregisterInstanceEventNotificationAttributesCommandInput extends DeregisterInstanceEventNotificationAttributesRequest {
}
/**
 * @public
 *
 * The output of {@link DeregisterInstanceEventNotificationAttributesCommand}.
 */
export interface DeregisterInstanceEventNotificationAttributesCommandOutput extends DeregisterInstanceEventNotificationAttributesResult, __MetadataBearer {
}
declare const DeregisterInstanceEventNotificationAttributesCommand_base: {
    new (input: DeregisterInstanceEventNotificationAttributesCommandInput): import("@smithy/smithy-client").CommandImpl<DeregisterInstanceEventNotificationAttributesCommandInput, DeregisterInstanceEventNotificationAttributesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeregisterInstanceEventNotificationAttributesCommandInput): import("@smithy/smithy-client").CommandImpl<DeregisterInstanceEventNotificationAttributesCommandInput, DeregisterInstanceEventNotificationAttributesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being
 *          included in scheduled event notifications for resources in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeregisterInstanceEventNotificationAttributesRequest
 *   DryRun: true || false,
 *   InstanceTagAttribute: { // DeregisterInstanceTagAttributeRequest
 *     IncludeAllTagsOfInstance: true || false,
 *     InstanceTagKeys: [ // InstanceTagKeySet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new DeregisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterInstanceEventNotificationAttributesResult
 * //   InstanceTagAttribute: { // InstanceTagNotificationAttribute
 * //     InstanceTagKeys: [ // InstanceTagKeySet
 * //       "STRING_VALUE",
 * //     ],
 * //     IncludeAllTagsOfInstance: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterInstanceEventNotificationAttributesCommandInput - {@link DeregisterInstanceEventNotificationAttributesCommandInput}
 * @returns {@link DeregisterInstanceEventNotificationAttributesCommandOutput}
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DeregisterInstanceEventNotificationAttributesCommand extends DeregisterInstanceEventNotificationAttributesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeregisterInstanceEventNotificationAttributesRequest;
            output: DeregisterInstanceEventNotificationAttributesResult;
        };
        sdk: {
            input: DeregisterInstanceEventNotificationAttributesCommandInput;
            output: DeregisterInstanceEventNotificationAttributesCommandOutput;
        };
    };
}
