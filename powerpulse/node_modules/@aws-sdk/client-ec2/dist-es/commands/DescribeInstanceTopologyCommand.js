import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceTopology$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceTopologyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceTopology", {})
    .n("EC2Client", "DescribeInstanceTopologyCommand")
    .sc(DescribeInstanceTopology$)
    .build() {
}
