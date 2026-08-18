import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSpotPlacementScores$ } from "../schemas/schemas_0";
export { $Command };
export class GetSpotPlacementScoresCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetSpotPlacementScores", {})
    .n("EC2Client", "GetSpotPlacementScoresCommand")
    .sc(GetSpotPlacementScores$)
    .build() {
}
