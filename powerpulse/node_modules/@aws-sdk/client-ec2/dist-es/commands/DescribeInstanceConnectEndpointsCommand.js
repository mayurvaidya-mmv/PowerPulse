import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceConnectEndpoints$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceConnectEndpointsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceConnectEndpoints", {})
    .n("EC2Client", "DescribeInstanceConnectEndpointsCommand")
    .sc(DescribeInstanceConnectEndpoints$)
    .build() {
}
