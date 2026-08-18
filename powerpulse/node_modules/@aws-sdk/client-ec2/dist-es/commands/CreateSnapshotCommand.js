import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshot$ } from "../schemas/schemas_0";
export { $Command };
export class CreateSnapshotCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateSnapshot", {})
    .n("EC2Client", "CreateSnapshotCommand")
    .sc(CreateSnapshot$)
    .build() {
}
