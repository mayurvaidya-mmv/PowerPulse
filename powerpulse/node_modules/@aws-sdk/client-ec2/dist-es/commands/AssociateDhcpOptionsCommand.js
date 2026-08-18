import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDhcpOptions$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateDhcpOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateDhcpOptions", {})
    .n("EC2Client", "AssociateDhcpOptionsCommand")
    .sc(AssociateDhcpOptions$)
    .build() {
}
