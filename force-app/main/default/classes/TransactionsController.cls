public with sharing class TransactionsController {
    @AuraEnabled
    public static List<Transaction__c> getTransactions(User user) {
        List<Transaction__c> transactionList;
        try {
            transactionList = [SELECT Name, Amount__c, Created_Date__c, CreatedById
                                                FROM Transaction__c
                                                WHERE CreatedById = :user.Id
                                                WITH SECURITY_ENFORCED
                                                ORDER BY Created_Date__c DESС 
                                                LIMIT 50];
        } catch(System.QueryException e){
            system.debug(e.getMessage());
            return null;
        }
        return transactionList;
    }

    @AuraEnabled
    public static Transaction__c saveTransaction(Transaction__c transact) {
        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.UPSERTABLE,
            transact);
        Transaction__c result = (Transaction__c) decision.getRecords()[0];
        try{
            upsert result;
        } catch(NoAccessException e){
            system.debug(e.getMessage());
            return null;
        }
        return result;
    }

    @AuraEnabled
    public static void deleteTransaction(Transaction__c transact) {
        if (Schema.sObjectType.Transaction__c.isDeletable()) {
            delete transact;
        }
    }
}
