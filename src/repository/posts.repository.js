import {db} from "../dbs/connectDb.js"

export function insertPostRepository({title,description,photo,userid}){
    return db.query(`INSERT INTO posts (title,description,photo,userid) 
    VALUES ($1,$2,$3,$4)`,[title,description,photo,userid])
}

export function getPostsByUserId(id,offset){
    return db.query(`SELECT posts.*,users.username AS username, users.photo AS userphoto FROM posts  
    JOIN users ON posts.userid = users.id 
    WHERE posts.userId = $1
    ORDER BY posts.createdat DESC
    OFFSET COALESCE($2,0) LIMIT 15 `,[id,offset])
}