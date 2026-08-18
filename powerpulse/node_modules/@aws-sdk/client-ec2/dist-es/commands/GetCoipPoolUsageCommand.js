import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCoipPoolUsage$ } from "../schemas/schemas_0";
export { $Command };
export class GetCoipPoolUsageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetCoipPoolUsage", {})
    .n("EC2Client", "GetCoipPoolUsageCommand")
    .sc(GetCoipPoolUsage$)
    .build() {
}
