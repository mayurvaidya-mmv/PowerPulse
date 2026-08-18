import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecondaryNetworks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSecondaryNetworksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSecondaryNetworks", {})
    .n("EC2Client", "DescribeSecondaryNetworksCommand")
    .sc(DescribeSecondaryNetworks$)
    .build() {
}
