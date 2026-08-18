import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DescribeImageReferencesRequest, DescribeImageReferencesResult } from "../models/models_3";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageReferencesCommand}.
 */
export interface DescribeImageReferencesCommandInput extends DescribeImageReferencesRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeImageReferencesCommand}.
 */
export interface DescribeImageReferencesCommandOutput extends DescribeImageReferencesResult, __MetadataBearer {
}
declare const DescribeImageReferencesCommand_base: {
    new (input: DescribeImageReferencesCommandInput): import("@smithy/smithy-client").CommandImpl<DescribeImageReferencesCommandInput, DescribeImageReferencesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DescribeImageReferencesCommandInput): import("@smithy/smithy-client").CommandImpl<DescribeImageReferencesCommandInput, DescribeImageReferencesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Describes your Amazon Web Services resources that are referencing the specified images.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-ami-references.html">Identify your resources referencing
 *         specified AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeImageReferencesRequest
 *   ImageIds: [ // DescribeImageReferencesImageIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   IncludeAllResourceTypes: true || false,
 *   ResourceTypes: [ // ResourceTypeRequestList
 *     { // ResourceTypeRequest
 *       ResourceType: "ec2:Instance" || "ec2:LaunchTemplate" || "ssm:Parameter" || "imagebuilder:ImageRecipe" || "imagebuilder:ContainerRecipe",
 *       ResourceTypeOptions: [ // ResourceTypeOptionList
 *         { // ResourceTypeOption
 *           OptionName: "state-name" || "version-depth",
 *           OptionValues: [ // ResourceTypeOptionValuesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeImageReferencesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageReferencesResult
 * //   NextToken: "STRING_VALUE",
 * //   ImageReferences: [ // ImageReferenceList
 * //     { // ImageReference
 * //       ImageId: "STRING_VALUE",
 * //       ResourceType: "ec2:Instance" || "ec2:LaunchTemplate" || "ssm:Parameter" || "imagebuilder:ImageRecipe" || "imagebuilder:ContainerRecipe",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImageReferencesCommandInput - {@link DescribeImageReferencesCommandInput}
 * @returns {@link DescribeImageReferencesCommandOutput}
 * @see {@link DescribeImageReferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeImageReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DescribeImageReferencesCommand extends DescribeImageReferencesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DescribeImageReferencesRequest;
            output: DescribeImageReferencesResult;
        };
        sdk: {
            input: DescribeImageReferencesCommandInput;
            output: DescribeImageReferencesCommandOutput;
        };
    };
}
