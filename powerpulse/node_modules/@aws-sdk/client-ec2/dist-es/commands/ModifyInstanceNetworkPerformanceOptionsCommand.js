import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceNetworkPerformanceOptions$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstanceNetworkPerformanceOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstanceNetworkPerformanceOptions", {})
    .n("EC2Client", "ModifyInstanceNetworkPerformanceOptionsCommand")
    .sc(ModifyInstanceNetworkPerformanceOptions$)
    .build() {
}
