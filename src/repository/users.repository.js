import {db} from "../dbs/connectDb.js"

export function getUserByUsernameOrEmail(locator){
    return db.query(`SELECT * FROM users WHERE users.email = $1 OR users.username = $1`,[locator])
}

export function getUsersRepository(username, offset){
    return db.query(`SELECT users.id, users.username, users.photo FROM users WHERE users.username ILIKE $1
    ORDER BY users.username ASC
     OFFSET COALESCE($2,0) LIMIT 15 `,[`${username}%`,offset])
}

export function getUserByIdRepository(id){
    return db.query(`SELECT id, username, photo, biography FROM users WHERE users.id = $1`,[id])
}
