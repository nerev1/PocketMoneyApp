({
    updateUserInfo : function(component, currentUser) {
        let userInfoAction = component.get('c.getUser');
        userInfoAction.setParams({'user' : currentUser});
        userInfoAction.setCallback(this, function(response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.currentUser', response.getReturnValue());
            }
        });
        $A.enqueueAction(userInfoAction);
    },
})
