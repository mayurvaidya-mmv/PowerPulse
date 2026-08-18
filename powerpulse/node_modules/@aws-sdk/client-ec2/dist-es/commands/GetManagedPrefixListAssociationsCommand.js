import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedPrefixListAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class GetManagedPrefixListAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetManagedPrefixListAssociations", {})
    .n("EC2Client", "GetManagedPrefixListAssociationsCommand")
    .sc(GetManagedPrefixListAssociations$)
    .build() {
}
