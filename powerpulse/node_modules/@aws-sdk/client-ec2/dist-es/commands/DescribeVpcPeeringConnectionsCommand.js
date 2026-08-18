import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcPeeringConnections$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcPeeringConnectionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcPeeringConnections", {})
    .n("EC2Client", "DescribeVpcPeeringConnectionsCommand")
    .sc(DescribeVpcPeeringConnections$)
    .build() {
}
