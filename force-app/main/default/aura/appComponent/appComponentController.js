({
    doInit : function(component, event, helper) {
        let action = component.get('c.getTransactions');
        
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.transactionList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    handleCreateTransaction : function(component, event, helper) {
        var newTransaction = event.getParam("transaction");
        helper.createTransaction(component, newTransaction);
    },
})
