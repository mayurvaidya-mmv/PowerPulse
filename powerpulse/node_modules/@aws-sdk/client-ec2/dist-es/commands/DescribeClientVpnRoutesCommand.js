import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientVpnRoutes$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeClientVpnRoutesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeClientVpnRoutes", {})
    .n("EC2Client", "DescribeClientVpnRoutesCommand")
    .sc(DescribeClientVpnRoutes$)
    .build() {
}
