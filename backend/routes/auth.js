const express=require('express')
const User = require('../models/User') //imorted User's schema/model
const router=express.Router()

// Create a user using :post '/api/auth/' dosen't require auth
router.post('/',(req,res)=>{
    console.log(req.body)

    const user =User(req.body) // When a user submits the registration form, their data is sent in the request body. We create a new User instance using the data from the request body (req.body) 

    user.save()  //call the save() method to save the new user to the database.

    res.send(req.body)
})

module.exports= router;









// In the context of HTTP (Hypertext Transfer Protocol), there are two commonly used methods for sending information from a client (such as a web browser) to a server: GET and POST requests. The main differences between the two are the way they transfer data and how they handle caching, bookmarking, and browser history.        GET Request: A GET request is used to retrieve data from a server. The data is sent as a query string in the URL. This method is commonly used for simple data retrieval, such as fetching a webpage, an image or any other resource.For example, if you enter a search query in a search engine and click the "search" button, your browser sends a GET request to the server with the query string in the URL. The server responds with a list of search results.      POST Request: A POST request is used to send data to a server for processing. The data is sent in the message body of the request. This method is commonly used for submitting forms, creating new resources, or updating existing ones.For example, if you fill out a form on a website and click the "submit" button, your browser sends a POST request to the server with the form data in the message body. The server processes the data and responds with a confirmation message or any other appropriate response.Overall, GET requests are used for retrieving data while POST requests are used for sending data to be processed.