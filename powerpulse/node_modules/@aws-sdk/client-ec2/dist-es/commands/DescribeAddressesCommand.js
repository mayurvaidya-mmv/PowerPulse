import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddresses$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeAddressesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeAddresses", {})
    .n("EC2Client", "DescribeAddressesCommand")
    .sc(DescribeAddresses$)
    .build() {
}
