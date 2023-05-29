import {db} from "../dbs/connectDb.js"

export function getUserByUsernameOrEmail(locator){
    return db.query(`SELECT * FROM users WHERE users.email = $1 OR users.username = $1`,[locator])
}

export function getUsersRepository(search, offset,userName){
    return db.query(`SELECT users.id, users.username, users.photo FROM users WHERE users.username ILIKE $1
    AND users.username <> $2
    ORDER BY users.username ASC
    OFFSET COALESCE($3,0) LIMIT 15 `,[`${search}%`,userName,offset])
}

export function getUserByIdRepository(findId,userId){
    return db.query(`SELECT users.id,users.username,users.biography,users.photo,
    (SELECT COUNT(follows.id) AS seguindo FROM follows WHERE follows.userid = $1),
    (SELECT COUNT(follows.id) AS seguidores FROM follows WHERE follows.followid = $1),
    (SELECT COUNT(follows.id) AS isfollowing FROM follows WHERE follows.followid = $1 AND follows.userid = $2)
    FROM users
    WHERE users.id = $1;`,[findId,userId])
}

