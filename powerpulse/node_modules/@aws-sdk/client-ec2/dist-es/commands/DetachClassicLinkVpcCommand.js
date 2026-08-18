import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachClassicLinkVpc$ } from "../schemas/schemas_0";
export { $Command };
export class DetachClassicLinkVpcCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DetachClassicLinkVpc", {})
    .n("EC2Client", "DetachClassicLinkVpcCommand")
    .sc(DetachClassicLinkVpc$)
    .build() {
}
