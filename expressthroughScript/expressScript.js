// require express
const express = require('express')
// get express function into a variable
const app =  express()
// simple request, response using send method  for home route-> more advanced than end method

app.get('/',(req,res)=>{


	res.send('Hello there!')


}).listen(3000)
