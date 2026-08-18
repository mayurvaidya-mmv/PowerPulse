import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableSnapshotBlockPublicAccess$ } from "../schemas/schemas_0";
export { $Command };
export class EnableSnapshotBlockPublicAccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableSnapshotBlockPublicAccess", {})
    .n("EC2Client", "EnableSnapshotBlockPublicAccessCommand")
    .sc(EnableSnapshotBlockPublicAccess$)
    .build() {
}
