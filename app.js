// require('dotenv').config()
const express = require('express')
const route = require('./routes')
const port = process.env.PORT || 3000

let app= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api', route)

app.listen(port, ()=>{
    console.log(`Listen on port ${port}`);
})

module.exports = app
