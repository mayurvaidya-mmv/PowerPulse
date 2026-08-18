import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePublicIpv4Pool$ } from "../schemas/schemas_0";
export { $Command };
export class DeletePublicIpv4PoolCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeletePublicIpv4Pool", {})
    .n("EC2Client", "DeletePublicIpv4PoolCommand")
    .sc(DeletePublicIpv4Pool$)
    .build() {
}
