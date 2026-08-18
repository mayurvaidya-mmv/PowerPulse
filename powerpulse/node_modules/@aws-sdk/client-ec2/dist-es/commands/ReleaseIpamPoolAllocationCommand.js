import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReleaseIpamPoolAllocation$ } from "../schemas/schemas_0";
export { $Command };
export class ReleaseIpamPoolAllocationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReleaseIpamPoolAllocation", {})
    .n("EC2Client", "ReleaseIpamPoolAllocationCommand")
    .sc(ReleaseIpamPoolAllocation$)
    .build() {
}
