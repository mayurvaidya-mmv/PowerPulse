import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteServerRoutingDatabase$ } from "../schemas/schemas_0";
export { $Command };
export class GetRouteServerRoutingDatabaseCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetRouteServerRoutingDatabase", {})
    .n("EC2Client", "GetRouteServerRoutingDatabaseCommand")
    .sc(GetRouteServerRoutingDatabase$)
    .build() {
}
