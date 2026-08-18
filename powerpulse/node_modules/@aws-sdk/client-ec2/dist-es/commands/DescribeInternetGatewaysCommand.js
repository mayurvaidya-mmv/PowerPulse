import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInternetGateways$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInternetGatewaysCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInternetGateways", {})
    .n("EC2Client", "DescribeInternetGatewaysCommand")
    .sc(DescribeInternetGateways$)
    .build() {
}
