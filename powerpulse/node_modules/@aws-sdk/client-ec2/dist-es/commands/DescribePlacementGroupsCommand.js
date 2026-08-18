import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePlacementGroups$ } from "../schemas/schemas_0";
export { $Command };
export class DescribePlacementGroupsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribePlacementGroups", {})
    .n("EC2Client", "DescribePlacementGroupsCommand")
    .sc(DescribePlacementGroups$)
    .build() {
}
