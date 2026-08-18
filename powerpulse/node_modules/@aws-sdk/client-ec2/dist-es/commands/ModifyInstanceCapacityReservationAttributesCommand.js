import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceCapacityReservationAttributes$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstanceCapacityReservationAttributesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstanceCapacityReservationAttributes", {})
    .n("EC2Client", "ModifyInstanceCapacityReservationAttributesCommand")
    .sc(ModifyInstanceCapacityReservationAttributes$)
    .build() {
}
