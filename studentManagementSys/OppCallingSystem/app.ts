interface ContactData{
    phoneNumber:string;
    name:string;
    email:string;
    nickName?:string;
    callHistory:string[];
    messageHistory:string[];
    emailHistory:string[];
}
class Contact {
    protected static contacts:ContactData[]=[]

    protected phoneNumber:string;
    protected name :string;
    protected email :string;
    protected nickName? :string;

    constructor(phoneNumber:string,name :string,email :string,nickName? ) {
        this.phoneNumber=phoneNumber;
        this.name=name;
        this.email=email;
        this.nickName=nickName;
    }
    saveContact(){
        if(Contact.contacts.)
    }
}