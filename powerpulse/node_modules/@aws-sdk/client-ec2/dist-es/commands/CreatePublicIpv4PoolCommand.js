import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePublicIpv4Pool$ } from "../schemas/schemas_0";
export { $Command };
export class CreatePublicIpv4PoolCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreatePublicIpv4Pool", {})
    .n("EC2Client", "CreatePublicIpv4PoolCommand")
    .sc(CreatePublicIpv4Pool$)
    .build() {
}
