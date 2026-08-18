import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateInstanceEventWindow$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateInstanceEventWindowCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateInstanceEventWindow", {})
    .n("EC2Client", "AssociateInstanceEventWindowCommand")
    .sc(AssociateInstanceEventWindow$)
    .build() {
}
