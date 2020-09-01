public with sharing class PocketMoneyAppController {

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
    public static void deleteTransactionController(Transaction__c transact) {
        
        delete transact;
    }
}
