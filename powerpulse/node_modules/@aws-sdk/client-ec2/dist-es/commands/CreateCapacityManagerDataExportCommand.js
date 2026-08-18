import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCapacityManagerDataExport$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCapacityManagerDataExportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateCapacityManagerDataExport", {})
    .n("EC2Client", "CreateCapacityManagerDataExportCommand")
    .sc(CreateCapacityManagerDataExport$)
    .build() {
}
