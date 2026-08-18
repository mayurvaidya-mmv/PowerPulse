import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCoipPools$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCoipPoolsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCoipPools", {})
    .n("EC2Client", "DescribeCoipPoolsCommand")
    .sc(DescribeCoipPools$)
    .build() {
}
