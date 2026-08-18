import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVerifiedAccessEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVerifiedAccessEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVerifiedAccessEndpoint", {})
    .n("EC2Client", "CreateVerifiedAccessEndpointCommand")
    .sc(CreateVerifiedAccessEndpoint$)
    .build() {
}
