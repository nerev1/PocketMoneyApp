({
    handleUpdateTransaction : function(component, event, helper) {
        let transactionForUpdate = event.getParam('transaction');
        helper.updateTransaction(component, transactionForUpdate);
    },

    handleDeleteTransaction : function(component, event, helper) {
        let transactionForDelete = event.getParam('transaction');
        let transactionIndex = event.getParam('index');
        helper.deleteTransaction(component, transactionForDelete, transactionIndex);
    },

    handleUpdateBalance : function(component, event, helper) {
        component.getEvent('updateUserTop').fire();
    }
})
