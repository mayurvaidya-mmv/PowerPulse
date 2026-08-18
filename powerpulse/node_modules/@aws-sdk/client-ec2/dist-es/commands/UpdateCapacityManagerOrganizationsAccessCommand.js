import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCapacityManagerOrganizationsAccess$ } from "../schemas/schemas_0";
export { $Command };
export class UpdateCapacityManagerOrganizationsAccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "UpdateCapacityManagerOrganizationsAccess", {})
    .n("EC2Client", "UpdateCapacityManagerOrganizationsAccessCommand")
    .sc(UpdateCapacityManagerOrganizationsAccess$)
    .build() {
}
