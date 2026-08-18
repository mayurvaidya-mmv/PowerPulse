import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeSecurityGroupVpcAssociationsCommand, } from "../commands/DescribeSecurityGroupVpcAssociationsCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeSecurityGroupVpcAssociationsCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.SecurityGroupVpcAssociations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            let allStringEq_5 = (returnComparator().length > 0);
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && (element_4 == "associated");
            }
            if (allStringEq_5) {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.SecurityGroupVpcAssociations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "associating") {
                    return { state: WaiterState.RETRY, reason };
                }
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.SecurityGroupVpcAssociations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "association-failed") {
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
export const waitForSecurityGroupVpcAssociationAssociated = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilSecurityGroupVpcAssociationAssociated = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
