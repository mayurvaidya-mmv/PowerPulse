import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAwsNetworkPerformanceMetricSubscriptions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeAwsNetworkPerformanceMetricSubscriptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeAwsNetworkPerformanceMetricSubscriptions", {})
    .n("EC2Client", "DescribeAwsNetworkPerformanceMetricSubscriptionsCommand")
    .sc(DescribeAwsNetworkPerformanceMetricSubscriptions$)
    .build() {
}
