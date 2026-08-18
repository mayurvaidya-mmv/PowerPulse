import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssociatedIpv6PoolCidrs$ } from "../schemas/schemas_0";
export { $Command };
export class GetAssociatedIpv6PoolCidrsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetAssociatedIpv6PoolCidrs", {})
    .n("EC2Client", "GetAssociatedIpv6PoolCidrsCommand")
    .sc(GetAssociatedIpv6PoolCidrs$)
    .build() {
}
