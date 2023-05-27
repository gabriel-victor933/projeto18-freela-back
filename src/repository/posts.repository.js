import {db} from "../dbs/connectDb.js"

export function insertPostRepository({title,description,photo,userid}){
    return db.query(`INSERT INTO posts (title,description,photo,userid) 
    VALUES ($1,$2,$3,$4)`,[title,description,photo,userid])
}