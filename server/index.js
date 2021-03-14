const express =require('express')
const mongoose=require('mongoose')
const config = require('config')
const fileRouter=require("./routes/file.routes")
const app=express()
const PORT=config.get('serverPort')
const corsMiddlware=require("./middleware/corsmiddleware")

app.use(corsMiddlware)
app.use(express.json())
app.use('/api/file',fileRouter)

const start=async ()=>{
    try{
        await mongoose.connect('mongodb+srv://mip:11235813@cluster0.urmpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT,()=>{
            console.log(`Сервер запустился на ${PORT} порту`)
        })
    }catch (e) {
        console.log(e)
    }
}
start()