trigger onUpdateTransaction on Transaction__c (before update) {
    User currentUser = [SELECT Balance__c FROM User WHERE Id = :UserInfo.getUserId()];
    for (Transaction__c transact : Trigger.new) {
        currentUser.Balance__c += transact.Amount__c;
    }
    for (Transaction__c transact : Trigger.old) {
        currentUser.Balance__c -= transact.Amount__c;
    }
    update currentUser;
}