({
    update : function(component, transaction, transactionIndex) {
        let updateEvent = component.getEvent('updateTransactionEvt');
        updateEvent.setParams({"transaction" : transaction}, {"index" : transactionIndex});
        updateEvent.fire();
    },

    delete : function(component, transaction, transactionIndex) {
        let deleteEvent = component.getEvent('deleteTransactionEvt');
        deleteEvent.setParams({'transaction' : transaction}, {"index" : transactionIndex});
        deleteEvent.fire();
    },
})
