import jwt from "jsonwebtoken"

export async function authenticateToken(req,res,next){

    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,data)=>{
        if(err) return res.sendStatus(403)
        
        req.userId = data.id
        req.userName = data.username
        next()
    })

}