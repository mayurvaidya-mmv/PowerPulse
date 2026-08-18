import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRouteTable$ } from "../schemas/schemas_0";
export { $Command };
export class CreateRouteTableCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateRouteTable", {})
    .n("EC2Client", "CreateRouteTableCommand")
    .sc(CreateRouteTable$)
    .build() {
}
