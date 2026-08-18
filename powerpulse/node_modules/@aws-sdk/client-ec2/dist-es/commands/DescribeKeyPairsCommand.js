import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeKeyPairs$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeKeyPairsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeKeyPairs", {})
    .n("EC2Client", "DescribeKeyPairsCommand")
    .sc(DescribeKeyPairs$)
    .build() {
}
