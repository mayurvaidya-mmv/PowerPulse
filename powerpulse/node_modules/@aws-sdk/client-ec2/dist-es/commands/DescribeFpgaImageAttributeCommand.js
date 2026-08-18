import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFpgaImageAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeFpgaImageAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeFpgaImageAttribute", {})
    .n("EC2Client", "DescribeFpgaImageAttributeCommand")
    .sc(DescribeFpgaImageAttribute$)
    .build() {
}
