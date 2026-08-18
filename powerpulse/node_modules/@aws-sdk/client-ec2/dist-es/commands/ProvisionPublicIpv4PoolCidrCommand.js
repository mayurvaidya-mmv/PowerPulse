import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionPublicIpv4PoolCidr$ } from "../schemas/schemas_0";
export { $Command };
export class ProvisionPublicIpv4PoolCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ProvisionPublicIpv4PoolCidr", {})
    .n("EC2Client", "ProvisionPublicIpv4PoolCidrCommand")
    .sc(ProvisionPublicIpv4PoolCidr$)
    .build() {
}
