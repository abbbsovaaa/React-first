import { Schema, model } from 'mongoose'

const anbarSchema = new Schema({
    username:String ,
    email: String ,
    password: Number ,
})

 export const anbarmodel= new model('anbar',anbarSchema)
export  default anbarmodel;
