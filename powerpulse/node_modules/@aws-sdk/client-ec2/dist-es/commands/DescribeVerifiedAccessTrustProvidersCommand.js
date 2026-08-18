import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVerifiedAccessTrustProviders$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVerifiedAccessTrustProvidersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVerifiedAccessTrustProviders", {})
    .n("EC2Client", "DescribeVerifiedAccessTrustProvidersCommand")
    .sc(DescribeVerifiedAccessTrustProviders$)
    .build() {
}
