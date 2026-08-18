import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCustomerGateways$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCustomerGatewaysCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCustomerGateways", {})
    .n("EC2Client", "DescribeCustomerGatewaysCommand")
    .sc(DescribeCustomerGateways$)
    .build() {
}
