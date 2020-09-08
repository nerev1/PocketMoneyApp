({
    startUpdateTransaction : function(component, event, helper) {
        event.getSource().set('v.disabled', true);
        component.find('update').set('v.disabled', false);
        component.find('newamount').set('v.disabled', false);
    },

    updateTransaction : function(component, event, helper) {
        
        let input = component.find('newamount');
        input.showHelpMessageIfInvalid();

        if (input.get('v.validity').valid) {
            let newAmount = input.get('v.value');
            component.find('newamount').set('v.disabled', true);
            input.set('v.value', 0);
            event.getSource().set('v.disabled', true);
            component.find('startupdate').set('v.disabled', false);
            let index = component.get('v.index');
            let transaction = component.get('v.transaction');
            transaction.Amount__c = newAmount;
            helper.update(component, transaction, index);
        }
    },

    deleteTransaction : function(component, event, helper) {
        let transaction = component.get('v.transaction');
        let index = component.get('v.index');
        helper.delete(component, transaction, index);
    }
})