const express =require('express')
const mongoose=require('mongoose')
const config = require('config')
const fileRouter=require("./routes/file.routes")
const app=express()
const PORT=config.get('serverPort')
const DBURL=config.get('dbUrl')


app.use(express.json())
app.use('/api/file',fileRouter)

const start=async ()=>{
    try{
        mongoose.connect(DBURL)
        app.listen(PORT,()=>{
            console.log(`Сервер запустился на ${PORT} порту`)
        })
    }catch (e) {
        
    }
}
start()