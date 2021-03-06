// Requiring our Post model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      item: req.body.item,
      description: req.body.description,
      image: req.body.image,
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts/:id", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
