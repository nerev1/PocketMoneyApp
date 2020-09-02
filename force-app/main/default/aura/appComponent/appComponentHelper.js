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
            }
        });
    },

    updateTransaction : function(component, transaction, index) {
        this.saveTransaction(component, transaction);
    },

    deleteTransaction : function(component, transaction, index) {
        var action = component.get('c.deleteTransactionController');
        action.setParams({
            'transact' : transaction,
        });

        action.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
                let transactionList = component.get('v.transactionList');
                console.log(index);
                transactionList.splice(index, 1);
                component.set('v.transactionList', transactionList);
            }
        });

        $A.enqueueAction(action);
    }
})
