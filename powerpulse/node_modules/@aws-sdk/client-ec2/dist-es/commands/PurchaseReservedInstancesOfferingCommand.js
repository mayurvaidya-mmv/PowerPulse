import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseReservedInstancesOffering$ } from "../schemas/schemas_0";
export { $Command };
export class PurchaseReservedInstancesOfferingCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "PurchaseReservedInstancesOffering", {})
    .n("EC2Client", "PurchaseReservedInstancesOfferingCommand")
    .sc(PurchaseReservedInstancesOffering$)
    .build() {
}
