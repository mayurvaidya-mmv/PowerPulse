import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeManagedPrefixLists$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeManagedPrefixListsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeManagedPrefixLists", {})
    .n("EC2Client", "DescribeManagedPrefixListsCommand")
    .sc(DescribeManagedPrefixLists$)
    .build() {
}
