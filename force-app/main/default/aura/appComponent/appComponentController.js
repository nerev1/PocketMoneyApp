({
    handleCreateTransaction : function(component, event, helper) {
        var newTransaction = event.getParam("transaction");
        helper.createTransaction(component, newTransaction);
    },

    updateUser : function(component, event, helper) {
        helper.updateUserMethod(component, component.get('v.user'));
    },
    
    doInit : function(component, event, helper) {
        helper.getCurrentUserMethod(component);
        helper.updateUserMethod(component, component.get('v.user'));
        helper.updateTransaction(component);
    }
})
