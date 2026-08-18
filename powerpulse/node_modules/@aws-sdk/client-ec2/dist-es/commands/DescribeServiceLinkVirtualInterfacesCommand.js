import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServiceLinkVirtualInterfaces$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeServiceLinkVirtualInterfacesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeServiceLinkVirtualInterfaces", {})
    .n("EC2Client", "DescribeServiceLinkVirtualInterfacesCommand")
    .sc(DescribeServiceLinkVirtualInterfaces$)
    .build() {
}
