import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecurityGroup$ } from "../schemas/schemas_0";
export { $Command };
export class CreateSecurityGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateSecurityGroup", {})
    .n("EC2Client", "CreateSecurityGroupCommand")
    .sc(CreateSecurityGroup$)
    .build() {
}
