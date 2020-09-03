({
    handleCreateTransaction : function(component, event, helper) {
        var newTransaction = event.getParam("transaction");
        helper.createTransaction(component, newTransaction);
    },

    updateUser : function(component, event, helper) {
        helper.updateUserMethod(component);
    },
    
    doInit : function(component, event, helper) {
        helper.updateUserMethod(component);
        helper.updateTransaction(component);
    }
})
