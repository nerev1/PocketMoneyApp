({
    deleteTransaction : function(component, event, helper) {
        let action = component.get("c.deleteTransactionController");
        action.setParams({
            "transact": component.get("v.transaction")
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {

            }
        });
        
        $A.enqueueAction(action);
    },
})