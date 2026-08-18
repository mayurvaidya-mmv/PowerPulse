import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueuedReservedInstances$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteQueuedReservedInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteQueuedReservedInstances", {})
    .n("EC2Client", "DeleteQueuedReservedInstancesCommand")
    .sc(DeleteQueuedReservedInstances$)
    .build() {
}
