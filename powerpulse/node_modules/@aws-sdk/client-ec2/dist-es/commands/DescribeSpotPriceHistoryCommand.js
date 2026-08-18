import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotPriceHistory$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSpotPriceHistoryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSpotPriceHistory", {})
    .n("EC2Client", "DescribeSpotPriceHistoryCommand")
    .sc(DescribeSpotPriceHistory$)
    .build() {
}
