import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRoute$ } from "../schemas/schemas_0";
export { $Command };
export class CreateRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateRoute", {})
    .n("EC2Client", "CreateRouteCommand")
    .sc(CreateRoute$)
    .build() {
}
