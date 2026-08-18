import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportSnapshot$ } from "../schemas/schemas_0";
export { $Command };
export class ImportSnapshotCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ImportSnapshot", {})
    .n("EC2Client", "ImportSnapshotCommand")
    .sc(ImportSnapshot$)
    .build() {
}
