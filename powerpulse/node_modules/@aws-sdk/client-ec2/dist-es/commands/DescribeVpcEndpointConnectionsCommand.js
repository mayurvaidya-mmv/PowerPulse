import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointConnections$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcEndpointConnectionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcEndpointConnections", {})
    .n("EC2Client", "DescribeVpcEndpointConnectionsCommand")
    .sc(DescribeVpcEndpointConnections$)
    .build() {
}
