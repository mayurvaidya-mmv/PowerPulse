import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceCreditSpecifications$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceCreditSpecificationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceCreditSpecifications", {})
    .n("EC2Client", "DescribeInstanceCreditSpecificationsCommand")
    .sc(DescribeInstanceCreditSpecifications$)
    .build() {
}
