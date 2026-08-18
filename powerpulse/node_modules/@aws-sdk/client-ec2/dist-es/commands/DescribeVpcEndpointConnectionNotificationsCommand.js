import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointConnectionNotifications$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcEndpointConnectionNotificationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcEndpointConnectionNotifications", {})
    .n("EC2Client", "DescribeVpcEndpointConnectionNotificationsCommand")
    .sc(DescribeVpcEndpointConnectionNotifications$)
    .build() {
}
