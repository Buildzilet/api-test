const express = require ('express')
const cors = require ('cors')
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
//const dotenv = require ('dotenv')
require('dotenv').config();
const { readdirSync } = require('fs')   // 
const connectDB = require('./config/db')

//connect
connectDB()


const app = express()


//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'20mb'}))
app.use(cors())


//เรียกใช้
readdirSync('./routes')
.map((r)=> app.use('/api',require('./routes/'+r)))



const port = process.env.PORT 
app.listen(port,()=>{
    console.log ('Server is running at http://localhost:5000')
})