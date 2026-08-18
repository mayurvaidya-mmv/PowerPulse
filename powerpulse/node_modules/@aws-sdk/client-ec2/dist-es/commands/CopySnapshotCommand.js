import { getCopySnapshotPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-ec2";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopySnapshot$ } from "../schemas/schemas_0";
export { $Command };
export class CopySnapshotCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getCopySnapshotPresignedUrlPlugin(config),
    ];
})
    .s("AmazonEC2", "CopySnapshot", {})
    .n("EC2Client", "CopySnapshotCommand")
    .sc(CopySnapshot$)
    .build() {
}
