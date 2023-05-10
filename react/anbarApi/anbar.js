import { Router } from "express";
import jwt from "jsonwebtoken";
import anbarmodel from "./model.js";
const  anbarRouter = new Router()

anbarRouter.get("/",(req,res)=>{
return res.send('get anbar')
})

anbarRouter.get("/createAnbar",(req,res)=>{
    const token =req.headers.authorization.split(' ')[1]
    if(!token){
        return res.send('token yoxdur ')
    }
    jwt.verify(token,Jwt_SECRET,async (err,data)=>{
        if(err){
            return res.send('token yalnisdir !')
        }else{
            if(data.role !=='admin'){
                return res.status(403).send('admin deyilsin')
            }else{
               await anbarmodel.create(req.body)
                return res.send("otaq yaradildi")
            }
           
        }
        
    })
    return res.send('yaradildi')
})
export default anbarRouter;