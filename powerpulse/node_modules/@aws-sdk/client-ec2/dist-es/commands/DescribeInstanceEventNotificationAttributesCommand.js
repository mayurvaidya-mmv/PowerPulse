import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceEventNotificationAttributes$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceEventNotificationAttributesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceEventNotificationAttributes", {})
    .n("EC2Client", "DescribeInstanceEventNotificationAttributesCommand")
    .sc(DescribeInstanceEventNotificationAttributes$)
    .build() {
}
