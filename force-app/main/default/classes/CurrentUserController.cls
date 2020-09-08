public with sharing class CurrentUserController {
    
    @AuraEnabled
    public static User getCurrentUser() {
        return [SELECT Username, Name, Email, City,  Country, Street, MobilePhone, Balance__c 
        FROM User 
        WHERE Id = :userInfo.getUserId()];
    }
}
