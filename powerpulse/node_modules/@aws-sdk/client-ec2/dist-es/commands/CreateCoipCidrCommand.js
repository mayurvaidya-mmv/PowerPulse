import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCoipCidr$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCoipCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateCoipCidr", {})
    .n("EC2Client", "CreateCoipCidrCommand")
    .sc(CreateCoipCidr$)
    .build() {
}
