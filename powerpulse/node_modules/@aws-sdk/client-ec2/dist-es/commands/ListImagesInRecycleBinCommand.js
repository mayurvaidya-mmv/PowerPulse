import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListImagesInRecycleBin$ } from "../schemas/schemas_0";
export { $Command };
export class ListImagesInRecycleBinCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ListImagesInRecycleBin", {})
    .n("EC2Client", "ListImagesInRecycleBinCommand")
    .sc(ListImagesInRecycleBin$)
    .build() {
}
