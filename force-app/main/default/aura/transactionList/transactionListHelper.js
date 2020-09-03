({
    updateTransaction : function(component, transaction) {
        let action = component.get('c.saveTransaction');
        action.setParams({
            'transact': transaction
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.getEvent("updateUserTop").fire();
            }
        });
        $A.enqueueAction(action);
    },
    
    deleteTransaction : function(component, transaction, index) {
        let action = component.get('c.deleteTransaction');
        action.setParams({
            'transact': transaction
        });
        action.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
                let transactionList = component.get('v.transactions');
                transactionList.splice(index, 1);
                component.set('v.transactions', transactionList);
                component.getEvent("updateUserTop").fire();
            } else {
                console.log(response.getState());
            }
        });
        $A.enqueueAction(action);
    },
})

