import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteManagedPrefixList$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteManagedPrefixListCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteManagedPrefixList", {})
    .n("EC2Client", "DeleteManagedPrefixListCommand")
    .sc(DeleteManagedPrefixList$)
    .build() {
}
