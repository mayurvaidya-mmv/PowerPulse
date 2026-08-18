import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateManagedPrefixList$ } from "../schemas/schemas_0";
export { $Command };
export class CreateManagedPrefixListCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateManagedPrefixList", {})
    .n("EC2Client", "CreateManagedPrefixListCommand")
    .sc(CreateManagedPrefixList$)
    .build() {
}
