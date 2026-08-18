import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteServerAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class GetRouteServerAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetRouteServerAssociations", {})
    .n("EC2Client", "GetRouteServerAssociationsCommand")
    .sc(GetRouteServerAssociations$)
    .build() {
}
