import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVolumesInRecycleBin$ } from "../schemas/schemas_0";
export { $Command };
export class ListVolumesInRecycleBinCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ListVolumesInRecycleBin", {})
    .n("EC2Client", "ListVolumesInRecycleBinCommand")
    .sc(ListVolumesInRecycleBin$)
    .build() {
}
