({
    getTransactionList : function(component, user) {
        let getTransactionsAction = component.get('c.getTransactions');
        getTransactionsAction.setParams({
            "user": user
        });
        getTransactionsAction.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.transactions', response.getReturnValue());
            } else {
                console.log(state + ': cannot get transaction list.');
            }
        });
        $A.enqueueAction(getTransactionsAction);
    },

    createTransaction : function(component, transaction) {
        let action = component.get('c.saveTransaction');
        action.setParams({
            'transact': transaction
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let transactionList = component.get('v.transactions');
                transactionList.unshift(response.getReturnValue());
                component.set('v.transactions', transactionList);
                component.getEvent("updateBalance").fire();
            } else {
                console.log(state + ': cannot create transaction.')
            }
        });
        $A.enqueueAction(action);
    },

    updateTransaction : function(component, transaction, index) {
        let action = component.get('c.saveTransaction');
        action.setParams({
            'transact': transaction
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let transactionList = component.get('v.transactions');
                transactionList.splice(index, 1, response.getReturnValue());
                component.set('v.transactions', transactionList);
                component.getEvent("updateBalance").fire();
            } else {
                console.log(state + ': cannot update transaction.')
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
                component.getEvent("updateBalance").fire();
            } else {
                console.log(state + ': cannot delete transaction.')
            }
        });
        $A.enqueueAction(action);
    },
})

