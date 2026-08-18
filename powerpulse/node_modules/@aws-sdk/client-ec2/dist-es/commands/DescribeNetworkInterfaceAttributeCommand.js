import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkInterfaceAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeNetworkInterfaceAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeNetworkInterfaceAttribute", {})
    .n("EC2Client", "DescribeNetworkInterfaceAttributeCommand")
    .sc(DescribeNetworkInterfaceAttribute$)
    .build() {
}
