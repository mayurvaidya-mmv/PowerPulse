import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeByoipCidrs$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeByoipCidrsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeByoipCidrs", {})
    .n("EC2Client", "DescribeByoipCidrsCommand")
    .sc(DescribeByoipCidrs$)
    .build() {
}
