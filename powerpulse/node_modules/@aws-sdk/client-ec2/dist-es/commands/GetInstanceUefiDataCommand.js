import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstanceUefiData$ } from "../schemas/schemas_0";
export { $Command };
export class GetInstanceUefiDataCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetInstanceUefiData", {})
    .n("EC2Client", "GetInstanceUefiDataCommand")
    .sc(GetInstanceUefiData$)
    .build() {
}
