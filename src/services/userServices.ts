import { usersofDB } from '../modelos/types_d_users'
//import userData from './users.json'

export const getEntries = {
    getAll: async()=>{
    return await usersofDB.find();
    },
    findById: async(id:string)=>{
        return await usersofDB.findById(id);
    },
    create: async(entry:object)=>{
        return await usersofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await usersofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await usersofDB.findByIdAndDelete(id);
    },

    findUserByUsername: async(name:string) =>{
        return await usersofDB.findOne({name: name})
    },

    // funció per eliminar una experiència d'un usuari
    deleteExperiencia: async(idUser:string, idExp:string)=>{
        return await usersofDB.findByIdAndUpdate(idUser,{$pull:{experiencies:idExp}});
    },

    // funció per afegir una experiència a un usuari
    addExperiencia:async(idUser:string, idExp:string)=>{
        return await usersofDB.findByIdAndUpdate(idUser,{$addToSet:{experiencies:idExp}});
    }

   
}
