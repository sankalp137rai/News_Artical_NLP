// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Require Aylien textapi for testing articles
const Aylien = require("aylien_textapi");

// Require dotenv for environment API keys
const dotenv = require('dotenv');
dotenv.config();


// Declaring port to listen 
const PORT = 8000;

//starting the instance of express
const app = express();

// Cors for cross origin allowance 
app.use(cors());
/* Middleware*/
//configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize the main project folder that is dist folder
app.use(express.static("dist"));

// Declaring Aylien textapi API
const AylienAPI = new Aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//g default startup page only for testing
app.get("./", function(req, res){
    res.sendFile("/index.html") 
  });


// Testing for text inputs of alyien api
app.post("/text", (req, res) => {
  console.log("Request to api route is received");
  console.log("The request textblock is :",req.body.text);
  AylienAPI.sentiment({'text': req.body.text}, function (err, result, remaining) {
          console.log("The following is the Aylien Callback :",result, remaining)
          res.send(result)
  })
});


// Testing for Url inputs of alyien api
app.post("/url", (req, res) => {
  console.log("Request to article route is received");
  console.log("URL requested is : ", req.body.text);
  AylienAPI.sentiment({
      'url': req.body.text
  }, function(err, response) {
      console.log("The following is the Aylien response :", response)
      res.send(response)
  });
});

// Our app is listening to port 8000
app.listen(PORT, () => console.log(`News nlp app is listening to https://localhost:${PORT}`));
