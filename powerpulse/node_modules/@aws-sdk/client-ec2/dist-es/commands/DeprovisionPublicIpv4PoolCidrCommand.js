import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeprovisionPublicIpv4PoolCidr$ } from "../schemas/schemas_0";
export { $Command };
export class DeprovisionPublicIpv4PoolCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeprovisionPublicIpv4PoolCidr", {})
    .n("EC2Client", "DeprovisionPublicIpv4PoolCidrCommand")
    .sc(DeprovisionPublicIpv4PoolCidr$)
    .build() {
}
