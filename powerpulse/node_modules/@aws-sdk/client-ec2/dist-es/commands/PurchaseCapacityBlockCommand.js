import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseCapacityBlock$ } from "../schemas/schemas_0";
export { $Command };
export class PurchaseCapacityBlockCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "PurchaseCapacityBlock", {})
    .n("EC2Client", "PurchaseCapacityBlockCommand")
    .sc(PurchaseCapacityBlock$)
    .build() {
}
