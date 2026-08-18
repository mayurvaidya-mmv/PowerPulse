import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSpotDatafeedSubscription$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteSpotDatafeedSubscriptionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteSpotDatafeedSubscription", {})
    .n("EC2Client", "DeleteSpotDatafeedSubscriptionCommand")
    .sc(DeleteSpotDatafeedSubscription$)
    .build() {
}
