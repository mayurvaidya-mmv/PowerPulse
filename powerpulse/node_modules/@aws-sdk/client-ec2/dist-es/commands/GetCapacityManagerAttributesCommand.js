import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCapacityManagerAttributes$ } from "../schemas/schemas_0";
export { $Command };
export class GetCapacityManagerAttributesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetCapacityManagerAttributes", {})
    .n("EC2Client", "GetCapacityManagerAttributesCommand")
    .sc(GetCapacityManagerAttributes$)
    .build() {
}
