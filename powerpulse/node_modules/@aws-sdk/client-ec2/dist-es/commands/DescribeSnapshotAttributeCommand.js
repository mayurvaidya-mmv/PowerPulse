import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshotAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSnapshotAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSnapshotAttribute", {})
    .n("EC2Client", "DescribeSnapshotAttributeCommand")
    .sc(DescribeSnapshotAttribute$)
    .build() {
}
