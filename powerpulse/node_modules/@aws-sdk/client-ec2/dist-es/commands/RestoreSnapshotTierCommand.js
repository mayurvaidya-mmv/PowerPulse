import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreSnapshotTier$ } from "../schemas/schemas_0";
export { $Command };
export class RestoreSnapshotTierCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RestoreSnapshotTier", {})
    .n("EC2Client", "RestoreSnapshotTierCommand")
    .sc(RestoreSnapshotTier$)
    .build() {
}
