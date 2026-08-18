import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePrefixLists$ } from "../schemas/schemas_0";
export { $Command };
export class DescribePrefixListsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribePrefixLists", {})
    .n("EC2Client", "DescribePrefixListsCommand")
    .sc(DescribePrefixLists$)
    .build() {
}
