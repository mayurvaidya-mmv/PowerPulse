import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyManagedPrefixList$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyManagedPrefixListCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyManagedPrefixList", {})
    .n("EC2Client", "ModifyManagedPrefixListCommand")
    .sc(ModifyManagedPrefixList$)
    .build() {
}
