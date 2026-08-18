import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeImportSnapshotTasksCommand, } from "../commands/DescribeImportSnapshotTasksCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeImportSnapshotTasksCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.ImportSnapshotTasks);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.SnapshotTaskDetail.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = (returnComparator().length > 0);
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && (element_4 == "completed");
            }
            if (allStringEq_5) {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.ImportSnapshotTasks);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.SnapshotTaskDetail.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "error") {
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
export const waitForSnapshotImported = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilSnapshotImported = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
