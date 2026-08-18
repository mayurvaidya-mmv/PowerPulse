import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSpotInstanceRequests$ } from "../schemas/schemas_0";
export { $Command };
export class CancelSpotInstanceRequestsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CancelSpotInstanceRequests", {})
    .n("EC2Client", "CancelSpotInstanceRequestsCommand")
    .sc(CancelSpotInstanceRequests$)
    .build() {
}
