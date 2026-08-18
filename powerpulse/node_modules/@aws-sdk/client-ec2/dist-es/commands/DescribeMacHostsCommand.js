import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMacHosts$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeMacHostsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeMacHosts", {})
    .n("EC2Client", "DescribeMacHostsCommand")
    .sc(DescribeMacHosts$)
    .build() {
}
