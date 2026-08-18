import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultCreditSpecification$ } from "../schemas/schemas_0";
export { $Command };
export class GetDefaultCreditSpecificationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetDefaultCreditSpecification", {})
    .n("EC2Client", "GetDefaultCreditSpecificationCommand")
    .sc(GetDefaultCreditSpecification$)
    .build() {
}
