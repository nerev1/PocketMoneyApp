public with sharing class UserInfoController {
    @AuraEnabled
    public static User getUser() {
        return [SELECT Username, Name, Email__c, Address, MobilePhone, Balance__c 
        FROM User 
        WHERE Id = :UserInfo.getUserId()];
    }
}
