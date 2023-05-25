import { db } from "../dbs/connectDb.js";


export function postUserRepository({name,email,username,photo,biography,password}){
    return db.query(`INSERT INTO users (name,email,username,photo,biography,password)
        VALUES ($1,$2,$3,$4,$5,$6)`,[name,email,username,photo,biography,password]) 
}

export function getUserByUsernameOrEmail(locator){
    return db.query(`SELECT * FROM users WHERE users.email = $1 OR users.username = $2`,[locator,locator])
}