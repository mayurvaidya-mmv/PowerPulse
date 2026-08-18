import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityBlockExtensionHistory$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCapacityBlockExtensionHistoryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCapacityBlockExtensionHistory", {})
    .n("EC2Client", "DescribeCapacityBlockExtensionHistoryCommand")
    .sc(DescribeCapacityBlockExtensionHistory$)
    .build() {
}
