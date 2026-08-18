import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceSqlHaHistoryStates$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceSqlHaHistoryStatesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceSqlHaHistoryStates", {})
    .n("EC2Client", "DescribeInstanceSqlHaHistoryStatesCommand")
    .sc(DescribeInstanceSqlHaHistoryStates$)
    .build() {
}
