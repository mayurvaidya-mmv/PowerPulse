import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIpamScope$ } from "../schemas/schemas_0";
export { $Command };
export class CreateIpamScopeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateIpamScope", {})
    .n("EC2Client", "CreateIpamScopeCommand")
    .sc(CreateIpamScope$)
    .build() {
}
