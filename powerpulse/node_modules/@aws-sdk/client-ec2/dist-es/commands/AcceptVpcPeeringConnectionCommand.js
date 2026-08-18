import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptVpcPeeringConnection$ } from "../schemas/schemas_0";
export { $Command };
export class AcceptVpcPeeringConnectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AcceptVpcPeeringConnection", {})
    .n("EC2Client", "AcceptVpcPeeringConnectionCommand")
    .sc(AcceptVpcPeeringConnection$)
    .build() {
}
