import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyFpgaImage$ } from "../schemas/schemas_0";
export { $Command };
export class CopyFpgaImageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CopyFpgaImage", {})
    .n("EC2Client", "CopyFpgaImageCommand")
    .sc(CopyFpgaImage$)
    .build() {
}
