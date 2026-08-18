import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFpgaImage$ } from "../schemas/schemas_0";
export { $Command };
export class CreateFpgaImageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateFpgaImage", {})
    .n("EC2Client", "CreateFpgaImageCommand")
    .sc(CreateFpgaImage$)
    .build() {
}
