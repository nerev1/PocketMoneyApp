({
    createTransaction : function(component, transaction) {
        var action = component.get("c.addTransaction");
        action.setParams({
            "transact": transaction
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var transactions = component.get("v.transactionList");
                transactions.push(response.getReturnValue());
                component.set("v.transactionList", transactions);
            } else {
                console.log(state);
            }
        });
        $A.enqueueAction(action);
    }
})
