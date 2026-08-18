import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableFastSnapshotRestores$ } from "../schemas/schemas_0";
export { $Command };
export class DisableFastSnapshotRestoresCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableFastSnapshotRestores", {})
    .n("EC2Client", "DisableFastSnapshotRestoresCommand")
    .sc(DisableFastSnapshotRestores$)
    .build() {
}
