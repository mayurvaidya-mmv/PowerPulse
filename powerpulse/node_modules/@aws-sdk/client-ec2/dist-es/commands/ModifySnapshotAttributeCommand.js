import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySnapshotAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifySnapshotAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifySnapshotAttribute", {})
    .n("EC2Client", "ModifySnapshotAttributeCommand")
    .sc(ModifySnapshotAttribute$)
    .build() {
}
