import { db } from "../dbs/connectDb.js";


export function postUserRepository({name,email,username,photo,biography,password}){
    return db.query(`INSERT INTO users (name,email,username,photo,biography,password)
        VALUES ($1,$2,$3,$4,$5,$6)`,[name,email,username,photo,biography,password]) 
}

