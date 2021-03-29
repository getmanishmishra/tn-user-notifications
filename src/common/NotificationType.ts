
export class NotificationType{
    public static readonly EMAIL = new NotificationType("1", "EMAIL");
    public static readonly SMS = new NotificationType("1", "SMS");
    public static readonly PUSH_TO_APP = new NotificationType("1", "PUSH_TO_APP");

     private constructor (public readonly id:string, public readonly name:string){

     }
}