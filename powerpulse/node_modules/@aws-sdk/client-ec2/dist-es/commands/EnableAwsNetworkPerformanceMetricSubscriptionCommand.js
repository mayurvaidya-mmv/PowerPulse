import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAwsNetworkPerformanceMetricSubscription$ } from "../schemas/schemas_0";
export { $Command };
export class EnableAwsNetworkPerformanceMetricSubscriptionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableAwsNetworkPerformanceMetricSubscription", {})
    .n("EC2Client", "EnableAwsNetworkPerformanceMetricSubscriptionCommand")
    .sc(EnableAwsNetworkPerformanceMetricSubscription$)
    .build() {
}
