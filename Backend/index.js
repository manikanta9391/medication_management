const express = require('express');
const cors=require('cors')
const connect_db = require('./db_connection/db_con.js');
const authRouter = require('./Routing/routing.js');


const app=express()

app.use(cors())
app.use(express.json());


connect_db()

app.use('/',authRouter)


app.listen(3000,()=>{
    console.log(`server running at the port ${3000}`)
})