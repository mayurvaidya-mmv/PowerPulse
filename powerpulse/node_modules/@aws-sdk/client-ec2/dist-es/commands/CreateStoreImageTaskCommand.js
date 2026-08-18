import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStoreImageTask$ } from "../schemas/schemas_0";
export { $Command };
export class CreateStoreImageTaskCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateStoreImageTask", {})
    .n("EC2Client", "CreateStoreImageTaskCommand")
    .sc(CreateStoreImageTask$)
    .build() {
}
