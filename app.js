require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const bodyParser = require('body-parser')
const bookRouter = require('./src/routes/bookRoutes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`We are running on port ${port}`)
})

app.use('/book',bookRouter)