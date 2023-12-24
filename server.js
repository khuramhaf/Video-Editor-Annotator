const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())
var fs = require('fs');
const { exec } = require("child_process");
app.use(express.static('./'));
var textparser = bodyParser.text()

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
})



	
		
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

