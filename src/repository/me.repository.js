import { db } from "../dbs/connectDb.js"

export function editMyUserRepository(name,photo,biography,id){
    return db.query(`UPDATE users SET  name = $1, photo = $2, biography = $3
    WHERE users.id = $4`,[name,photo,biography,id])
}

export function deleteMyUserRepository(id){
    return db.query(`DELETE FROM users WHERE users.id = $1`,[id])
}
