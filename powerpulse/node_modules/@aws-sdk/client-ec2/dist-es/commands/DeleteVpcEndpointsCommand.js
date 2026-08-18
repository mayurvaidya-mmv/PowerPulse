import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEndpoints$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpcEndpointsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpcEndpoints", {})
    .n("EC2Client", "DeleteVpcEndpointsCommand")
    .sc(DeleteVpcEndpoints$)
    .build() {
}
