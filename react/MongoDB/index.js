import express from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'

const secret='pakizeeeeee'
const app = express()
app.use(express.json())

app.post('/login', async (req, res) => {
    const body = req.body
    console.log(body)
    const token= jwt.sign({email:body.email},secret)
    res.send(token)

   
})
app.get('/sign-up',async(req,res)=>{
     res.sendFile(path.resolve("./pages/sign-up.html"))
}) 

app.get('/profile', async (req ,res)=>{
const token = req.headers.authorization?.split(' ')[1]
if(!token){
   return res.status(400).send('token yoxdur!!!')
}

   jwt.verify(token,secret,(err,data)=>{
    if(err){
        res.status(400).send('token yanlisdir!!!')
    }
    console.log(data)
   })
   res.send('ok')
})

app.listen(5000,()=>{
    console.log('server is upp...')
})