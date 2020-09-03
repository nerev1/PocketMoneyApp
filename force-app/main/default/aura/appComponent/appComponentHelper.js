({
    updateUserMethod : function(component) {
        let userInfoAction = component.get('c.getUser');
        userInfoAction.setCallback(this, function(response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.user', response.getReturnValue());
            }
        });
        $A.enqueueAction(userInfoAction);
    },

    createTransaction : function(component, newTransaction) {
        var action = component.get("c.saveTransaction");
        action.setParams({
            'transact': newTransaction,
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var transactions = component.get('v.transactionList');
                transactions.unshift(newTransaction);
                component.set('v.transactionList', transactions);
            } else {
                console.log(state);
            }
        });
        $A.enqueueAction(action);
        this.updateUserMethod(component);
    },

    updateTransaction : function(component) {
        let action = component.get('c.getTransactions');
        
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.transactionList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        this.updateUserMethod(component);
    },
})
