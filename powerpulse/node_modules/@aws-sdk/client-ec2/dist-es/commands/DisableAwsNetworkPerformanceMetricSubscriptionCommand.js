import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableAwsNetworkPerformanceMetricSubscription$ } from "../schemas/schemas_0";
export { $Command };
export class DisableAwsNetworkPerformanceMetricSubscriptionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableAwsNetworkPerformanceMetricSubscription", {})
    .n("EC2Client", "DisableAwsNetworkPerformanceMetricSubscriptionCommand")
    .sc(DisableAwsNetworkPerformanceMetricSubscription$)
    .build() {
}
