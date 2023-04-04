import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url';
import path from 'path'
import { dirname } from "path"
const app=express()





const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.json())
app.use(cors())
// app.use(express.static(path.join(__dirname+'/public/client')))
// app.use(express.static(path.join(__dirname+'/public' )))
app.get('/',(req,res)=>{
// res.send('welcome ')

app.use(express.static(path.resolve(__dirname,'public','client2')))
res.sendFile(path.resolve(__dirname,'public','client2','index.html'))

}
)
app.get('/api',(req,res)=>{
    res.json('hi')
})

app.listen(process.env.PORT || 4000,()=>{
    console.log('work')
})