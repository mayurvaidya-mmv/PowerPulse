import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotInstanceRequests$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSpotInstanceRequestsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSpotInstanceRequests", {})
    .n("EC2Client", "DescribeSpotInstanceRequestsCommand")
    .sc(DescribeSpotInstanceRequests$)
    .build() {
}
