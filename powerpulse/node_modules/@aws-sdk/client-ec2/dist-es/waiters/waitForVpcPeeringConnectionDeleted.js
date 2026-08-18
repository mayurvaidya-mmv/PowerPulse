import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeVpcPeeringConnectionsCommand, } from "../commands/DescribeVpcPeeringConnectionsCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeVpcPeeringConnectionsCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.VpcPeeringConnections);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status.Code;
                });
                return projection_3;
            };
            let allStringEq_5 = (returnComparator().length > 0);
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && (element_4 == "deleted");
            }
            if (allStringEq_5) {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "InvalidVpcPeeringConnectionID.NotFound") {
            return { state: WaiterState.SUCCESS, reason };
        }
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForVpcPeeringConnectionDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilVpcPeeringConnectionDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
