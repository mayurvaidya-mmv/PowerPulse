import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddressesAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeAddressesAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeAddressesAttribute", {})
    .n("EC2Client", "DescribeAddressesAttributeCommand")
    .sc(DescribeAddressesAttribute$)
    .build() {
}
