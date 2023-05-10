// 1. Anbara aid olan field -lar olsun . Məsələn : name,location,sahəsi və cavabdeh olan şəxs
// 2. Həmin anbarda olan məhsulları yaradın : Məsələn : 
// name,location(hansi refdedir),brand,quantity,price,photo və hansı anbarda yerləşir . 
// 3. 2 istifadəçi olsun : USER , Admin . 
// 4. USER hansı işləri görə bilər onları yazın 
// 5. ADMİN hansı işləri görə bilər onları yazın
// 6. User və Admin olmasını bilmək üçün isə authMiddleWare  istifadə edin . 
// 7. User və Admin ucun modeller yaradin . Murekkeb olmasına ehtiyac yoxdur .
// 8. Şifrələrini hash edin . 
// 9. Photo ucun multer package -inden istifade edin .
// 10. Kodlarinizi router və controllerə ayırıb yazın .

import express from 'express'
import model from './model.js'
import anbarRouter from './anbar.js'
const app=express()
app.use(express.json())
app.use( "/anbar",anbarRouter)
app.get('/',(req,res)=>{
    res.send('hi')
})

app.post('/',(req,res)=>{
    
   
})

app.listen(5500,()=>{
    console.log('server is up...')
})