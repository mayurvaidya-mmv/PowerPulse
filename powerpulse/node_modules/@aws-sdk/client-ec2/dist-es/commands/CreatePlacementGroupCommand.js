import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePlacementGroup$ } from "../schemas/schemas_0";
export { $Command };
export class CreatePlacementGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreatePlacementGroup", {})
    .n("EC2Client", "CreatePlacementGroupCommand")
    .sc(CreatePlacementGroup$)
    .build() {
}
