({
    handleUpdateTransaction : function(component, event, helper) {
        let transactionForUpdate = event.getParam('transaction');
        let transactionIndex = event.getParam('index');
        helper.updateTransaction(component, transactionForUpdate, transactionIndex);
    },
    handleDeleteTransaction : function(component, event, helper) {
        let transactionForDelete = event.getParam('transaction');
        let transactionIndex = event.getParam('index');
        helper.deleteTransaction(component, transactionForDelete, transactionIndex);
    }
})
