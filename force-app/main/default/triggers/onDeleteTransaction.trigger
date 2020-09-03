trigger onDeleteTransaction on Transaction__c (after delete) {
    User currentUser = [SELECT Balance__c FROM User WHERE Id = :UserInfo.getUserId()];
    for (Transaction__c transact : Trigger.old) {
        currentUser.Balance__c -= transact.Amount__c;
    }
    update currentUser;
}