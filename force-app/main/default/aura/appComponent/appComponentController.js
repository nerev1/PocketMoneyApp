({
    handleCreateTransaction : function(component, event, helper) {
        var newTransaction = event.getParam("transaction");
        helper.createTransaction(component, newTransaction);
    }
})
