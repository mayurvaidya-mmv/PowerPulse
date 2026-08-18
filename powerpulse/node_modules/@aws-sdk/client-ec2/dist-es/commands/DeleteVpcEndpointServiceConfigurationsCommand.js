import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEndpointServiceConfigurations$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpcEndpointServiceConfigurationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpcEndpointServiceConfigurations", {})
    .n("EC2Client", "DeleteVpcEndpointServiceConfigurationsCommand")
    .sc(DeleteVpcEndpointServiceConfigurations$)
    .build() {
}
