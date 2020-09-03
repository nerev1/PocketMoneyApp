({
    updateBalance : function(component) {
        let updateBalanceEvent = component.getEvent("updateBalanceEvt");
        updateBalanceEvent.fire();
    },

    update : function(component, transactionItem, transactionIndex) {
        let updateEvent = component.getEvent("updateTransactionEvt");
        updateEvent.setParams({"transaction" : transactionItem,
                                "index" : transactionIndex});
        updateEvent.fire();
        this.updateBalance(component);
    },

    delete : function(component, transactionItem, transactionIndex) {
        let deleteEvent = component.getEvent("deleteTransactionEvt");
        deleteEvent.setParams({"transaction" : transactionItem,
                                "index" : transactionIndex});
        deleteEvent.fire();
        this.updateBalance(component);
    },
})
