import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVolumesModifications$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVolumesModificationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVolumesModifications", {})
    .n("EC2Client", "DescribeVolumesModificationsCommand")
    .sc(DescribeVolumesModifications$)
    .build() {
}
