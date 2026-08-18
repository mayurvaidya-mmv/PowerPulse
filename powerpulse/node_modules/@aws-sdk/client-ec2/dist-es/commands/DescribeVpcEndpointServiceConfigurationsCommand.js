import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointServiceConfigurations$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpcEndpointServiceConfigurationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpcEndpointServiceConfigurations", {})
    .n("EC2Client", "DescribeVpcEndpointServiceConfigurationsCommand")
    .sc(DescribeVpcEndpointServiceConfigurations$)
    .build() {
}
