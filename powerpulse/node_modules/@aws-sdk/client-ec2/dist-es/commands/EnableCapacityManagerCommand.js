import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableCapacityManager$ } from "../schemas/schemas_0";
export { $Command };
export class EnableCapacityManagerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableCapacityManager", {})
    .n("EC2Client", "EnableCapacityManagerCommand")
    .sc(EnableCapacityManager$)
    .build() {
}
