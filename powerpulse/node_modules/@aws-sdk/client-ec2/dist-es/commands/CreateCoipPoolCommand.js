import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCoipPool$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCoipPoolCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateCoipPool", {})
    .n("EC2Client", "CreateCoipPoolCommand")
    .sc(CreateCoipPool$)
    .build() {
}
