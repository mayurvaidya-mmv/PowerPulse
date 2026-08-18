import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPoolCidrs$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamPoolCidrsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamPoolCidrs", {})
    .n("EC2Client", "GetIpamPoolCidrsCommand")
    .sc(GetIpamPoolCidrs$)
    .build() {
}
