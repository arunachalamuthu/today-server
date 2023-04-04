import express from 'express'
import cors from 'cors'
const app=express()

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
res.send('welcome ')
}
)

app.listen(process.env.PORT || 4000,()=>{
    console.log('work')
})