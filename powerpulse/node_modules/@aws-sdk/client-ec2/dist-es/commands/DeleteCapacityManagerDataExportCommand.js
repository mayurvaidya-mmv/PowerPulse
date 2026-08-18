import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCapacityManagerDataExport$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteCapacityManagerDataExportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteCapacityManagerDataExport", {})
    .n("EC2Client", "DeleteCapacityManagerDataExportCommand")
    .sc(DeleteCapacityManagerDataExport$)
    .build() {
}
