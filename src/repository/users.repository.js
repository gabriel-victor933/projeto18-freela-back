import {db} from "../dbs/connectDb.js"

export function getUserByUsernameOrEmail(locator){
    return db.query(`SELECT * FROM users WHERE users.email = $1 OR users.username = $1`,[locator])
}