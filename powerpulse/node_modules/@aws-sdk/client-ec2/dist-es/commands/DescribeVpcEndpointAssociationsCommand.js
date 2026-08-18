import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcEndpointAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcEndpointAssociations", {})
    .n("EC2Client", "DescribeVpcEndpointAssociationsCommand")
    .sc(DescribeVpcEndpointAssociations$)
    .build() {
}
