import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceImageMetadata$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceImageMetadataCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceImageMetadata", {})
    .n("EC2Client", "DescribeInstanceImageMetadataCommand")
    .sc(DescribeInstanceImageMetadata$)
    .build() {
}
