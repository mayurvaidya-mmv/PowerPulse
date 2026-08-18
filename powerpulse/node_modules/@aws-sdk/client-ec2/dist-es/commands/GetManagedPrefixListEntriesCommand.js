import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedPrefixListEntries$ } from "../schemas/schemas_0";
export { $Command };
export class GetManagedPrefixListEntriesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetManagedPrefixListEntries", {})
    .n("EC2Client", "GetManagedPrefixListEntriesCommand")
    .sc(GetManagedPrefixListEntries$)
    .build() {
}
