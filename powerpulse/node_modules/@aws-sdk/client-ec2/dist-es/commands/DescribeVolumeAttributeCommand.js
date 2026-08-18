import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVolumeAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVolumeAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVolumeAttribute", {})
    .n("EC2Client", "DescribeVolumeAttributeCommand")
    .sc(DescribeVolumeAttribute$)
    .build() {
}
