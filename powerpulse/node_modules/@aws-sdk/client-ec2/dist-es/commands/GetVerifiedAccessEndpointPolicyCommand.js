import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVerifiedAccessEndpointPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class GetVerifiedAccessEndpointPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetVerifiedAccessEndpointPolicy", {})
    .n("EC2Client", "GetVerifiedAccessEndpointPolicyCommand")
    .sc(GetVerifiedAccessEndpointPolicy$)
    .build() {
}
