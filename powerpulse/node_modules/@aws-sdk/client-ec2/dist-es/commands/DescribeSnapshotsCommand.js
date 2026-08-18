import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshots$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSnapshotsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSnapshots", {})
    .n("EC2Client", "DescribeSnapshotsCommand")
    .sc(DescribeSnapshots$)
    .build() {
}
