import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrafficMirrorFilters$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTrafficMirrorFiltersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTrafficMirrorFilters", {})
    .n("EC2Client", "DescribeTrafficMirrorFiltersCommand")
    .sc(DescribeTrafficMirrorFilters$)
    .build() {
}
