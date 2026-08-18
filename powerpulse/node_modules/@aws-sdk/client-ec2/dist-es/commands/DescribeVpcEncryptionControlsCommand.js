import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEncryptionControls$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcEncryptionControlsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcEncryptionControls", {})
    .n("EC2Client", "DescribeVpcEncryptionControlsCommand")
    .sc(DescribeVpcEncryptionControls$)
    .build() {
}
