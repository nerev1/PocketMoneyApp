({
    initUser : function(component, event, helper) {
        let getCurrentUserAction = component.get('c.getCurrentUser');
        getCurrentUserAction.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.user', response.getReturnValue());
            } else {
                console.log(state + ': cannot get current user info.');
            }
        });
        $A.enqueueAction(getCurrentUserAction);
    }
})
