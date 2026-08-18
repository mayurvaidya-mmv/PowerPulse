import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcEndpointServicePayerResponsibility$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpcEndpointServicePayerResponsibilityCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpcEndpointServicePayerResponsibility", {})
    .n("EC2Client", "ModifyVpcEndpointServicePayerResponsibilityCommand")
    .sc(ModifyVpcEndpointServicePayerResponsibility$)
    .build() {
}
