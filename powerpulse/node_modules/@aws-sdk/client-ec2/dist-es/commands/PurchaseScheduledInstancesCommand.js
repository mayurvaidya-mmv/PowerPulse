import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseScheduledInstances$ } from "../schemas/schemas_0";
export { $Command };
export class PurchaseScheduledInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "PurchaseScheduledInstances", {})
    .n("EC2Client", "PurchaseScheduledInstancesCommand")
    .sc(PurchaseScheduledInstances$)
    .build() {
}
