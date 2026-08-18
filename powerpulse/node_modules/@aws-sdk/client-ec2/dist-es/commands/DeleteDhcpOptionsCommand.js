import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDhcpOptions$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteDhcpOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteDhcpOptions", {})
    .n("EC2Client", "DeleteDhcpOptionsCommand")
    .sc(DeleteDhcpOptions$)
    .build() {
}
