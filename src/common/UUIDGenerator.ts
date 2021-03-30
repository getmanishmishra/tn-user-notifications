import {v4 as uuidv4} from 'uuid'

export class UUIDGen{
    public static generateUUID():string{
       const  uuid = uuidv4();
        console.log("Generated UUID is : ", uuid)
        return uuid;
    }
}