import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamResourceCidrs$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamResourceCidrsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamResourceCidrs", {})
    .n("EC2Client", "GetIpamResourceCidrsCommand")
    .sc(GetIpamResourceCidrs$)
    .build() {
}
