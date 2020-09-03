({
    updateTransaction : function(component, transaction) {
        let action = component.get('c.saveTransaction');
        action.setParams({
            'transact': transaction
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
            } else {
                console.log(response.getState());
            }
        });
        $A.enqueueAction(action);
    },
})

