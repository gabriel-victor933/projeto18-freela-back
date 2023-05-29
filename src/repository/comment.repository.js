import { db } from "../dbs/connectDb.js";

export function postCommentReposiroty(userId,postId,comment){
    return db.query(`INSERT INTO comments (userid,postid,comment) 
    VALUES ($1,$2,$3)`,[userId,postId,comment])
}

export function getCommentReposiroty(postId,offset){
    return db.query(`SELECT comments.id,comments.comment,comments.createdat, users.username,users.photo, users.id AS userId FROM comments 
    JOIN users ON comments.userid = users.id
    WHERE comments.postid = $1
    ORDER BY comments.createdat DESC
    OFFSET COALESCE($2,0) LIMIT 15`,[postId,offset])
}