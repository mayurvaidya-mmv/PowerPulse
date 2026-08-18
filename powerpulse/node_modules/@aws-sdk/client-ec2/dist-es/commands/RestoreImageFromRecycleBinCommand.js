import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreImageFromRecycleBin$ } from "../schemas/schemas_0";
export { $Command };
export class RestoreImageFromRecycleBinCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RestoreImageFromRecycleBin", {})
    .n("EC2Client", "RestoreImageFromRecycleBinCommand")
    .sc(RestoreImageFromRecycleBin$)
    .build() {
}
