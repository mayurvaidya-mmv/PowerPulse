import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePlacementGroup$ } from "../schemas/schemas_0";
export { $Command };
export class DeletePlacementGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeletePlacementGroup", {})
    .n("EC2Client", "DeletePlacementGroupCommand")
    .sc(DeletePlacementGroup$)
    .build() {
}
