import {db} from "../dbs/connectDb.js"

export function getUserByUsernameOrEmail(locator){
    return db.query(`SELECT * FROM users WHERE users.email = $1 OR users.username = $1`,[locator])
}

export function getUsersRepository(username, offset){
    return db.query(`SELECT users.id, users.username, users.photo FROM users WHERE users.username ILIKE $1
    ORDER BY users.username ASC
     OFFSET COALESCE($2,0) LIMIT 15 `,[`${username}%`,offset])
}

export function getUserByIdRepository(findId,userId){
    return db.query(`SELECT users.id,users.username,users.biography,users.photo,
    (SELECT COUNT(follows.id) AS seguindo FROM follows WHERE follows.userid = $1),
    (SELECT COUNT(follows.id) AS seguidores FROM follows WHERE follows.followid = $1),
    (SELECT COUNT(follows.id) AS isfollowing FROM follows WHERE follows.followid = $1 AND follows.userid = $2)
    FROM users
    WHERE users.id = $1;`,[findId,userId])
}

export function editMyUserRepository(name,photo,biography,id){
    return db.query(`UPDATE users SET  name = $1, photo = $2, biography = $3
    WHERE users.id = $4`,[name,photo,biography,id])
}

export function deleteMyUserRepository(id){
    return db.query(`DELETE FROM users WHERE users.id = $1`,[id])
}
