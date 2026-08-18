import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetReservedInstancesExchangeQuote$ } from "../schemas/schemas_0";
export { $Command };
export class GetReservedInstancesExchangeQuoteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetReservedInstancesExchangeQuote", {})
    .n("EC2Client", "GetReservedInstancesExchangeQuoteCommand")
    .sc(GetReservedInstancesExchangeQuote$)
    .build() {
}
