import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreSnapshotFromRecycleBin$ } from "../schemas/schemas_0";
export { $Command };
export class RestoreSnapshotFromRecycleBinCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RestoreSnapshotFromRecycleBin", {})
    .n("EC2Client", "RestoreSnapshotFromRecycleBinCommand")
    .sc(RestoreSnapshotFromRecycleBin$)
    .build() {
}
