import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouteServerEndpoints$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeRouteServerEndpointsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeRouteServerEndpoints", {})
    .n("EC2Client", "DescribeRouteServerEndpointsCommand")
    .sc(DescribeRouteServerEndpoints$)
    .build() {
}
