import { db } from "../dbs/connectDb.js"

export function editMyUserRepository(name,photo,biography,id){
    return db.query(`UPDATE users SET  name = $1, photo = $2, biography = $3
    WHERE users.id = $4`,[name,photo,biography,id])
}

export function deleteMyUserRepository(id){
    return db.query(`DELETE FROM users WHERE users.id = $1`,[id])
}


export function getMyFeedRepository(id,offset){
    return db.query(`SELECT posts.*,users.username AS username, users.photo AS userphoto, 
    (SELECT COUNT(likes.id) AS like FROM likes WHERE likes.postid = posts.id ),
    (SELECT COUNT(comments.id) AS comment FROM comments WHERE comments.postid = posts.id ),
    (SELECT COUNT(likes.id) AS isliked FROM likes WHERE likes.userid = $1 AND likes.postid = posts.id )
    FROM posts  
    JOIN users ON posts.userid = users.id
    WHERE posts.userid IN 
    (SELECT follows.followid FROM follows WHERE follows.userid = $1)
    ORDER BY posts.createdat DESC
    OFFSET COALESCE($2,0) 
    LIMIT 15`,[id,offset])
}
