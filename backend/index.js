const connectToMongo=require('./db'); //this is just for connect database
const express = require('express')

connectToMongo(); //the function exists in db.js
const app = express()
const port = 3000

// app.get('/', (req, res) => {  
//   res.send('Hello Ds!')
// })

//it is a middleware 
//with the help of this we can send json 
//without this we can't use req.body in routes
//bassically req.body is a json or say data to send into db
app.use(express.json())

// available routes
//these are end points
app.use('/api/auth', require('./routes/auth'))
app.use('api/notes', require('./routes/notes'))
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})