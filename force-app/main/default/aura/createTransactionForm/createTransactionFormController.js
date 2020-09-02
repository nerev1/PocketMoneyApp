({
    clickCreate : function(component, event, helper) {
        var validTransaction = component.find('transactionform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validTransaction) {
            component.set("v.transaction.Created_Date__c", new Date());
            var newTransaction = component.get("v.transaction");
            helper.createTransaction(component, newTransaction);
        }
    },
})
