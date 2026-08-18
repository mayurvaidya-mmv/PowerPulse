import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpc$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpcCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpc", {})
    .n("EC2Client", "DeleteVpcCommand")
    .sc(DeleteVpc$)
    .build() {
}
