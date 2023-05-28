import { db } from "../dbs/connectDb.js";

export function postFollowRepository(userId,followId){
    return db.query(`SELECT EXISTS (SELECT 1 FROM users WHERE id = $1)`,[followId])
    .then((result)=>{
        if(result.rows[0].exists){
            return db.query(`INSERT INTO follows (userid,followid) 
            VALUES ($1,$2)`,[userId,followId])
        } else {
            throw new Error(`Usuario não existe`);
        } 
    })
    .catch((error) => {
        throw new Error(`Ocorreu um erro: ${error.message}`);
      })
}