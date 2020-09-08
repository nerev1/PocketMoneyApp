({
    clickCreate : function(component, event, helper) {
        let input = component.find('transactionform');
        let validTransaction = false;
        if (input.length > 1) {
            validTransaction = component.find('transactionform').reduce(function (validSoFar, inputCmp) {
                inputCmp.showHelpMessageIfInvalid();
                return validSoFar && inputCmp.get('v.validity').valid;
            }, true);
        } else {
            validTransaction = input.get('v.validity').valid;
        }
        if (validTransaction) {
            component.set("v.transaction.Created_Date__c", new Date());
            let userId = component.get('v.user.Id');
            component.set("v.transaction.CreatedById", userId);
            var newTransaction = component.get("v.transaction");
            helper.createTransaction(component, newTransaction);
        }
    },
})
