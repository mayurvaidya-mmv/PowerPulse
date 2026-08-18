import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLockedSnapshots$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeLockedSnapshotsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeLockedSnapshots", {})
    .n("EC2Client", "DescribeLockedSnapshotsCommand")
    .sc(DescribeLockedSnapshots$)
    .build() {
}
