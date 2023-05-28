import {db} from "../dbs/connectDb.js"

export function postLikeRepository(postId,userId){
    return db.query(`SELECT EXISTS (SELECT 1 FROM posts WHERE id = $1)`,[postId])
    .then((result)=>{
        if(result.rows[0].exists){
            return db.query(`INSERT INTO likes (userid,postid) 
            VALUES ($1,$2)`,[userId,postId])
        } else {
            throw new Error(`Usuario não existe`);
        } 
    })
    .catch((err)=>{
        throw new Error(`Ocorreu um erro: ${err.message}`);
    })
}

export function deleteLikeRepository(postId,userId){
    return db.query(`DELETE FROM likes WHERE postid = $1 AND userid = $2`,[postId,userId])
}