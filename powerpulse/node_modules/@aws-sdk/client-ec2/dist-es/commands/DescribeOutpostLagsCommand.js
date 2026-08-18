import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOutpostLags$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeOutpostLagsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeOutpostLags", {})
    .n("EC2Client", "DescribeOutpostLagsCommand")
    .sc(DescribeOutpostLags$)
    .build() {
}
