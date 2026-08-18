import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptReservedInstancesExchangeQuote$ } from "../schemas/schemas_0";
export { $Command };
export class AcceptReservedInstancesExchangeQuoteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AcceptReservedInstancesExchangeQuote", {})
    .n("EC2Client", "AcceptReservedInstancesExchangeQuoteCommand")
    .sc(AcceptReservedInstancesExchangeQuote$)
    .build() {
}
