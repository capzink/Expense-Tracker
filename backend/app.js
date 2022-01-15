require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const connectDb = require('./db/connectDb')
const expesenRoute = require('./router/expense')

const app = express()

const port = process.env.port || 3001


//routes
app.use("/", expesenRoute);


//connection

const start = async()=>{
    await connectDb(process.env.MONGO_URI)
    console.log('Connected to Db');
    app.listen(port, ()=>{
        console.log('Listening on port', port);
    })
}

start()


