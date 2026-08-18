import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceSqlHaStates$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceSqlHaStatesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceSqlHaStates", {})
    .n("EC2Client", "DescribeInstanceSqlHaStatesCommand")
    .sc(DescribeInstanceSqlHaStates$)
    .build() {
}
