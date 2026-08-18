import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcAttribute", {})
    .n("EC2Client", "DescribeVpcAttributeCommand")
    .sc(DescribeVpcAttribute$)
    .build() {
}
