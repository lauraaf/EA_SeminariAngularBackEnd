import { model, Schema, ObjectId } from "mongoose";

export interface usersInterface{
    name: string,
    mail: string,
    password: string,
    comment: string,
    experiencies: ObjectId[] //vector d'IDs d'experiències a les quals l'usuari s'ha apuntat
}
//export type UsersInterfacePublicInfo = Pick<usersInterface, 'id' | 'name' | 'comment'>
export type newUserInfo = Omit<usersInterface,'id'>

export const usersSchema = new Schema<usersInterface>({
    name: String,
    mail: String,
    password: String,
    comment: String,
    // especifica que el camp "experiencies" és un array d'ObjectIds
    experiencies: [{type: Schema.Types.ObjectId, ref:'user'}] 
})

export const usersofDB = model<usersInterface>('user',usersSchema)