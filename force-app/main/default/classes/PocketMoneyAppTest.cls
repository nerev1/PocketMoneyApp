@isTest
private class PocketMoneyAppTest {
    @isTest
    static void testGetTransactions() {
        List<Transaction__c> expectedTransactions = [SELECT Id, Amount__c, Created_Date__c, CreatedById
        FROM Transaction__c
        WHERE CreatedById = :UserInfo.getUserId()
        ORDER BY Created_Date__c DESC];
        User currentUser = [SELECT Id FROM User WHERE Id = :UserInfo.getUserId()];
        List<Transaction__c> transactions = TransactionsController.getTransactions(currentUser);
        System.assertEquals(expectedTransactions, transactions);
    }

    @isTest
    static void testSaveTransaction() {
        Transaction__c transactionForSave = new Transaction__c(Amount__c = 200);
        Transaction__c savedTransaction = TransactionsController.saveTransaction (transactionForSave);
        List<Transaction__c> insertedTransaction = [SELECT Id 
                                                FROM Transaction__c
                                                WHERE Id = :transactionForSave.Id];
        System.assertEquals(1, insertedTransaction.size());
        System.assertEquals(savedTransaction, transactionForSave);
    }

    @isTest
    static void testDeleteTransaction() {
        Transaction__c transactionForDelete = new Transaction__c(Amount__c = 300);
        insert transactionForDelete;
        List<Transaction__c> insertedTransaction = [SELECT Id 
                                                    FROM Transaction__c 
                                                    WHERE Id = :transactionForDelete.Id];
        System.assertEquals(1, insertedTransaction.size());
        TransactionsController.deleteTransaction(transactionForDelete);
        insertedTransaction = [SELECT Id 
                                FROM Transaction__c 
                                WHERE Id = :transactionForDelete.Id];
        System.assertEquals(0, insertedTransaction.size());
    }

    @isTest
    static void testGetUser() {
        User testUser = [SELECT Id FROM User WHERE Id = :userInfo.getUserId()];
        User returnedUser = AppComponentController.getUser(testUser);
        System.assertEquals(testUser.Id, returnedUser.Id);
    }

    @isTest
    static void testGetCurrentUser() {
        User returnedUser = CurrentUserController.getCurrentUser();
        System.assertEquals(userInfo.getUserId(), returnedUser.Id);
    }

    @isTest
    static void testOnUpdate() {
        Transaction__c transactionForUpdate = new Transaction__c(Amount__c = 400);
        insert transactionForUpdate;
        User currentUser = [SELECT Balance__c FROM User WHERE Id = :userInfo.getUserId()];
        Decimal balanceBeforeUpdate = currentUser.Balance__c;
        Decimal transactionDifference = 150;
        transactionForUpdate.Amount__c += transactionDifference;
        update transactionForUpdate;
        currentUser = [SELECT Balance__c FROM User WHERE Id = :userInfo.getUserId()];
        Decimal expectedBalance = balanceBeforeUpdate + transactionDifference;
        System.assertEquals(expectedBalance, currentUser.Balance__c);
    }
}
