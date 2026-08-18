import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySnapshotTier$ } from "../schemas/schemas_0";
export { $Command };
export class ModifySnapshotTierCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifySnapshotTier", {})
    .n("EC2Client", "ModifySnapshotTierCommand")
    .sc(ModifySnapshotTier$)
    .build() {
}
