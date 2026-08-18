import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdentityIdFormat$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIdentityIdFormatCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIdentityIdFormat", {})
    .n("EC2Client", "DescribeIdentityIdFormatCommand")
    .sc(DescribeIdentityIdFormat$)
    .build() {
}
