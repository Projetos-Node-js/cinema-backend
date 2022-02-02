const express = require('express');

const routes = express.Router();

routes.get("*", function(request, response, next){
    response.redirect("https://" + request.headers.host + request.url);  
  });

routes.get('/', (req,res,next) => {
    return res.json({hello: 'world'});
})

routes.get('/filmes', (req,res,next) => {
    return res.json({hello: 'world'});
})

module.exports = routes;