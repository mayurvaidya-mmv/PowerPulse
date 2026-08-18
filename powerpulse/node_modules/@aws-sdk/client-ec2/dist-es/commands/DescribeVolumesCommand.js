import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVolumes$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVolumesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVolumes", {})
    .n("EC2Client", "DescribeVolumesCommand")
    .sc(DescribeVolumes$)
    .build() {
}
