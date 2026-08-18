import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpnConnectionDeviceTypes$ } from "../schemas/schemas_0";
export { $Command };
export class GetVpnConnectionDeviceTypesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetVpnConnectionDeviceTypes", {})
    .n("EC2Client", "GetVpnConnectionDeviceTypesCommand")
    .sc(GetVpnConnectionDeviceTypes$)
    .build() {
}
