import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRoute$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteRoute", {})
    .n("EC2Client", "DeleteRouteCommand")
    .sc(DeleteRoute$)
    .build() {
}
