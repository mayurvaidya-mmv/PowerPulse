import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCapacityManagerMetricData$ } from "../schemas/schemas_0";
export { $Command };
export class GetCapacityManagerMetricDataCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetCapacityManagerMetricData", {})
    .n("EC2Client", "GetCapacityManagerMetricDataCommand")
    .sc(GetCapacityManagerMetricData$)
    .build() {
}
