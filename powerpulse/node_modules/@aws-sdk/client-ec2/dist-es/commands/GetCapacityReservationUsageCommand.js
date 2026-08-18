import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCapacityReservationUsage$ } from "../schemas/schemas_0";
export { $Command };
export class GetCapacityReservationUsageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetCapacityReservationUsage", {})
    .n("EC2Client", "GetCapacityReservationUsageCommand")
    .sc(GetCapacityReservationUsage$)
    .build() {
}
