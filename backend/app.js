const path = require('path')
require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const connectDb = require('./db/connectDb')
const transactions = require('./router/transactions')

const app = express()
const port = process.env.port || 3001
app.use(express.json())
if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}

//routes
app.use("/transactions", transactions);
if(process.env.NODE_ENV==='production'){
  app.use(express.static('../frontend/build'))
  app.get('*',(req,res)=>res.sendFile(path.resolve(__diranme,'frontend','build','index.html' )))

}


//connection

const start = async()=>{
    try {
          await connectDb(process.env.MONGO_URI);
          console.log("Connected to Db");
          app.listen(port, () => {
            console.log("Listening on port", port);
          });
        
    } catch (error) {
        console.log(error);   
    }
}
start()


