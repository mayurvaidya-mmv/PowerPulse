import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdFormat$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIdFormatCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIdFormat", {})
    .n("EC2Client", "DescribeIdFormatCommand")
    .sc(DescribeIdFormat$)
    .build() {
}
