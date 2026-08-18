import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSnapshotsInRecycleBin$ } from "../schemas/schemas_0";
export { $Command };
export class ListSnapshotsInRecycleBinCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ListSnapshotsInRecycleBin", {})
    .n("EC2Client", "ListSnapshotsInRecycleBinCommand")
    .sc(ListSnapshotsInRecycleBin$)
    .build() {
}
