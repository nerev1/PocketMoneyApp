({
    createTransaction : function(component, newTransaction) {
        var createEvent = component.getEvent("createTransaction");
        createEvent.setParams({"transaction" : newTransaction });
        createEvent.fire();
    }
})
