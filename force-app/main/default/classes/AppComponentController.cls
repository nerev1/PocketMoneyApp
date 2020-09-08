public with sharing class AppComponentController {
    @AuraEnabled
    public static User getUser(User user) {
        return [SELECT Username, Name, Email, City,  Country, Street, MobilePhone, Balance__c 
        FROM User 
        WHERE Id = :user.Id];
    }
}
