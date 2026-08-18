import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCoipPool$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteCoipPoolCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteCoipPool", {})
    .n("EC2Client", "DeleteCoipPoolCommand")
    .sc(DeleteCoipPool$)
    .build() {
}
