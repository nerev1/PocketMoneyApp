public with sharing class TransactionsController {
    @AuraEnabled
    public static List<Transaction__c> getTransactions(User user) {
        return [SELECT Name, Amount__c, Created_Date__c, CreatedById
        FROM Transaction__c
        WHERE CreatedById = :user.Id
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
}
