public with sharing class PocketMoneyAppController {
    
    @AuraEnabled
    public static User getUser() {
        return [SELECT Username, Name, Email__c, Address, MobilePhone, Balance__c 
        FROM User 
        WHERE Id = :UserInfo.getUserId()];
    }

    @AuraEnabled
    public static List<Transaction__c> getTransactions() {
        return [SELECT Name, Amount__c, Created_Date__c, CreatedById
        FROM Transaction__c
        WHERE CreatedById = :UserInfo.getUserId()
        ORDER BY Created_Date__c DESC];
    }

    @AuraEnabled
    public static Transaction__c addTransaction(Transaction__c transact) {
        insert transact;
        return transact;
    }

    @AuraEnabled
    public static Transaction__c deleteTransaction(Transaction__c transact) {
        delete transact;
        return transact;
    }
}
