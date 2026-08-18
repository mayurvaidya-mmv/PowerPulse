import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeInstancesCommand } from "../commands/DescribeInstancesCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeInstancesCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.Reservations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Instances;
                });
                let flat_4 = [].concat(...projection_3);
                let projection_6 = flat_4.map((element_5) => {
                    return element_5.State.Name;
                });
                return projection_6;
            };
            let allStringEq_8 = (returnComparator().length > 0);
            for (let element_7 of returnComparator()) {
                allStringEq_8 = allStringEq_8 && (element_7 == "stopped");
            }
            if (allStringEq_8) {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.Reservations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Instances;
                });
                let flat_4 = [].concat(...projection_3);
                let projection_6 = flat_4.map((element_5) => {
                    return element_5.State.Name;
                });
                return projection_6;
            };
            for (let anyStringEq_7 of returnComparator()) {
                if (anyStringEq_7 == "pending") {
                    return { state: WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.Reservations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Instances;
                });
                let flat_4 = [].concat(...projection_3);
                let projection_6 = flat_4.map((element_5) => {
                    return element_5.State.Name;
                });
                return projection_6;
            };
            for (let anyStringEq_7 of returnComparator()) {
                if (anyStringEq_7 == "terminated") {
                    return { state: WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForInstanceStopped = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilInstanceStopped = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
