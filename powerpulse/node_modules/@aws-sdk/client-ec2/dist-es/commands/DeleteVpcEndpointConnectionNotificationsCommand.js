import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEndpointConnectionNotifications$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpcEndpointConnectionNotificationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpcEndpointConnectionNotifications", {})
    .n("EC2Client", "DeleteVpcEndpointConnectionNotificationsCommand")
    .sc(DeleteVpcEndpointConnectionNotifications$)
    .build() {
}
