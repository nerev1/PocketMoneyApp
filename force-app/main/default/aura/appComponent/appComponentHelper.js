({
    saveTransaction : function(component, newTransaction, callback) {
        var action = component.get("c.saveTransaction");
        action.setParams({
            'transact': newTransaction,
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },

    createTransaction : function(component, newTransaction) {
        this.saveTransaction(component, newTransaction, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var transactions = component.get('v.transactionList');
                transactions.push(newTransaction);
                component.set('v.transactionList', transactions);
            } else {
                console.log('((');
            }
        });
    },

    updateTransaction : function(component, transaction) {
        this.saveTransaction(component, transaction);
    },
})
