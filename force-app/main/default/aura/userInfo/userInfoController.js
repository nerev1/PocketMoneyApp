({
    doInit : function(component, event, helper) {
        var action = component.get("c.getUser");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.currentUser', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);

        action = component.get("c.getTransactions");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.transactionList', response.getReturnValue());
            } else {
                console.log('error state: ' + state);
            }
        });
        $A.enqueueAction(action);
    },

    clickCreate : function(component, event, helper) {
        var validTransaction = component.find('transactionform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validTransaction) {
            component.set("v.newTransaction.Created_Date__c", new Date());
            var newTransaction = component.get("v.newTransaction");
            helper.createTransaction(component, newTransaction);
        }
    }
})
