<aura:application extends="force:slds" controller="CurrentUserController">
    <aura:attribute name="user" type="User"/>
    <aura:handler name="init" value="{!this}" action="{!c.initUser}"/>
    <c:appComponent currentUser="{!v.user}"/>
</aura:application>	
