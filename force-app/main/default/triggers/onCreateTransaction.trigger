trigger onCreateTransaction on Transaction__c (after insert) {
    User currentUser = [SELECT Balance__c FROM User WHERE Id = :UserInfo.getUserId()];
    for (Transaction__c transact : Trigger.new) {
        currentUser.Balance__c += transact.Amount__c;
    }
    update currentUser;
}