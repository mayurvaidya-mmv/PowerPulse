import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReservedInstancesModifications$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeReservedInstancesModificationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeReservedInstancesModifications", {})
    .n("EC2Client", "DescribeReservedInstancesModificationsCommand")
    .sc(DescribeReservedInstancesModifications$)
    .build() {
}
