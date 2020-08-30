({
    deleteTransaction : function(component, event, helper) {
        var action = component.get("c.deleteTransaction");
        action.setParams({
            "transact": "v.transaction"
        });
        
        $A.enqueueAction(action);
    },
})