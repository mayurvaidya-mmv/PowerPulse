import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpnConcentrator$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVpnConcentratorCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVpnConcentrator", {})
    .n("EC2Client", "CreateVpnConcentratorCommand")
    .sc(CreateVpnConcentrator$)
    .build() {
}
