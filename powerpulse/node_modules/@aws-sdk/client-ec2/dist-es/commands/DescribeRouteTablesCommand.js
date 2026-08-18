import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouteTables$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeRouteTablesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeRouteTables", {})
    .n("EC2Client", "DescribeRouteTablesCommand")
    .sc(DescribeRouteTables$)
    .build() {
}
