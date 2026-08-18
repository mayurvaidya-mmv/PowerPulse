import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotFleetRequestHistory$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSpotFleetRequestHistoryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSpotFleetRequestHistory", {})
    .n("EC2Client", "DescribeSpotFleetRequestHistoryCommand")
    .sc(DescribeSpotFleetRequestHistory$)
    .build() {
}
