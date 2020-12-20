const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  // res.setHeader("Access-Control-Allow-Headers", "content-type, X-Auth-Token,");
  // res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'fadf124211',
      title: 'First Server-Side Post',
      content: 'This is coming from the server'
    },
    { id: 'ksajflaj132',
      title: 'Second Server-Side Post',
      content: 'This is coming from the server!'
    },
  ];
  res.status(200).json({
    message: 'Post fetched successfully',
    posts: posts
  });
});

module.exports = app;
