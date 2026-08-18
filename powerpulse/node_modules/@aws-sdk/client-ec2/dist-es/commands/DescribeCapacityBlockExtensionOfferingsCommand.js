import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityBlockExtensionOfferings$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCapacityBlockExtensionOfferingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCapacityBlockExtensionOfferings", {})
    .n("EC2Client", "DescribeCapacityBlockExtensionOfferingsCommand")
    .sc(DescribeCapacityBlockExtensionOfferings$)
    .build() {
}
