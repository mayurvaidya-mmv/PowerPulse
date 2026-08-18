import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcBlockPublicAccessOptions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcBlockPublicAccessOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcBlockPublicAccessOptions", {})
    .n("EC2Client", "DescribeVpcBlockPublicAccessOptionsCommand")
    .sc(DescribeVpcBlockPublicAccessOptions$)
    .build() {
}
