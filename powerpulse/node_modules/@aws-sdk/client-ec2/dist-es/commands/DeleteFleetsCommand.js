import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFleets$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteFleetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteFleets", {})
    .n("EC2Client", "DeleteFleetsCommand")
    .sc(DeleteFleets$)
    .build() {
}
