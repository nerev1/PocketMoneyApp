public with sharing class PocketMoneyAppController {

    @AuraEnabled
    public static List<Transaction__c> getTransactions() {
        return [SELECT Name, Amount__c, Created_Date__c, CreatedById
        FROM Transaction__c
        WHERE CreatedById = :UserInfo.getUserId()
        ORDER BY Created_Date__c DESC];
    }

    @AuraEnabled
    public static Transaction__c saveTransaction(Transaction__c transact) {
        upsert transact;
        return transact;
    }

    @AuraEnabled
    public static void deleteTransaction(Transaction__c transact) {
        delete transact;
    }

    @AuraEnabled
    public static User getUser(User user) {
        return [SELECT Username, Name, Email__c, City,  Country, Street, MobilePhone, Balance__c 
        FROM User 
        WHERE Id = :user.Id];
    }

    @AuraEnabled
    public static User getCurrentUser(){
        return [SELECT Username, Name, Email__c, City,  Country, Street, MobilePhone, Balance__c 
        FROM User 
        WHERE Id = :userInfo.getUserId()];
    }
}
