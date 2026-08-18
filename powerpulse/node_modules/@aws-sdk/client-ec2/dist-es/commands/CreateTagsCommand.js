import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTags$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTagsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTags", {})
    .n("EC2Client", "CreateTagsCommand")
    .sc(CreateTags$)
    .build() {
}
