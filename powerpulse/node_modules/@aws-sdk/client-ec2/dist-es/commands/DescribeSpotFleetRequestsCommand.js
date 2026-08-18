import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotFleetRequests$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSpotFleetRequestsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSpotFleetRequests", {})
    .n("EC2Client", "DescribeSpotFleetRequestsCommand")
    .sc(DescribeSpotFleetRequests$)
    .build() {
}
