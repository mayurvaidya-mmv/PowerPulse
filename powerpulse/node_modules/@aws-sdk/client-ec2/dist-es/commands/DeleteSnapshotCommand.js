import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSnapshot$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteSnapshotCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteSnapshot", {})
    .n("EC2Client", "DeleteSnapshotCommand")
    .sc(DeleteSnapshot$)
    .build() {
}
