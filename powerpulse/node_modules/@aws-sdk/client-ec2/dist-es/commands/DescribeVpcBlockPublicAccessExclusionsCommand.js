import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcBlockPublicAccessExclusions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcBlockPublicAccessExclusionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcBlockPublicAccessExclusions", {})
    .n("EC2Client", "DescribeVpcBlockPublicAccessExclusionsCommand")
    .sc(DescribeVpcBlockPublicAccessExclusions$)
    .build() {
}
