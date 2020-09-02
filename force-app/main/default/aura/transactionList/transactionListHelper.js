({
    updateTransaction : function(component, transaction, index) {
        let updateEvent = component.getEvent('transactionsAfterUpdate');
        updateEvent.setParams({'updatedTransaction' : transaction}, {'updatedTransactionIndex' : index});
        updateEvent.fire();
    },
    deleteTransaction : function(component, transaction, index) {
        let deleteEvent = component.getEvent('transactionsAfterDelete');
        deleteEvent.setParams({'updatedTransaction' : transaction}, {'updatedTransactionIndex' : index});
        deleteEvent.fire();
    },
})
