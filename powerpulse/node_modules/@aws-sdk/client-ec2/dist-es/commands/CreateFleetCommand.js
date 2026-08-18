import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFleet$ } from "../schemas/schemas_0";
export { $Command };
export class CreateFleetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateFleet", {})
    .n("EC2Client", "CreateFleetCommand")
    .sc(CreateFleet$)
    .build() {
}
