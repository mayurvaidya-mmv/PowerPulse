import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFleets$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeFleetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeFleets", {})
    .n("EC2Client", "DescribeFleetsCommand")
    .sc(DescribeFleets$)
    .build() {
}
