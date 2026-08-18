import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetImageAncestry$ } from "../schemas/schemas_0";
export { $Command };
export class GetImageAncestryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetImageAncestry", {})
    .n("EC2Client", "GetImageAncestryCommand")
    .sc(GetImageAncestry$)
    .build() {
}
