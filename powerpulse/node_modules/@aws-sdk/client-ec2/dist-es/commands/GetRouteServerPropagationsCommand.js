import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteServerPropagations$ } from "../schemas/schemas_0";
export { $Command };
export class GetRouteServerPropagationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetRouteServerPropagations", {})
    .n("EC2Client", "GetRouteServerPropagationsCommand")
    .sc(GetRouteServerPropagations$)
    .build() {
}
