import {db} from "../dbs/connectDb.js"

export function insertPostRepository({title,description,photo,userid}){
    return db.query(`INSERT INTO posts (title,description,photo,userid) 
    VALUES ($1,$2,$3,$4)`,[title,description,photo,userid])
}

export function getPostsByUserId(id,offset,userId){
    return db.query(`SELECT posts.*,users.username AS username, users.photo AS userphoto, 
    (SELECT COUNT(likes.id) AS like FROM likes WHERE likes.postid = posts.id ),
    (SELECT COUNT(comments.id) AS comment FROM comments WHERE comments.postid = posts.id ),
    (SELECT COUNT(likes.id) AS isliked FROM likes WHERE likes.userid = $3 AND likes.postid = posts.id )
    FROM posts  
    JOIN users ON posts.userid = users.id 
    WHERE posts.userId = $1
    ORDER BY posts.createdat DESC
    OFFSET COALESCE($2,0) LIMIT 15 `,[id,offset,userId])
}

export function getPostByIdRepository(id,userId){
    return db.query(`SELECT posts.*,
    (SELECT COUNT(likes.id) AS like FROM likes WHERE likes.postid = posts.id ),
    (SELECT COUNT(comments.id) AS comment FROM comments WHERE comments.postid = posts.id ),
    (SELECT COUNT(likes.id) AS isliked FROM likes WHERE likes.userid = $2 AND likes.postid = posts.id ) 
    FROM posts WHERE posts.id = $1`,[id,userId])
}