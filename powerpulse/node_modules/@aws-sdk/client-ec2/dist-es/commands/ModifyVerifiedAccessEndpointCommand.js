import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVerifiedAccessEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVerifiedAccessEndpoint", {})
    .n("EC2Client", "ModifyVerifiedAccessEndpointCommand")
    .sc(ModifyVerifiedAccessEndpoint$)
    .build() {
}
