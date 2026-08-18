import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecondaryNetwork$ } from "../schemas/schemas_0";
export { $Command };
export class CreateSecondaryNetworkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateSecondaryNetwork", {})
    .n("EC2Client", "CreateSecondaryNetworkCommand")
    .sc(CreateSecondaryNetwork$)
    .build() {
}
