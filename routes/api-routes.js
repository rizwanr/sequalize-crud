// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    db.Todo.findAll({}).then(todo => {
      res.json(todo)
    })


    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function (req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    let todo = {
      text: req.body.text,
      complete: req.body.complete
    }

    //create is for posting
    db.Todo.create(
      todo
    ).then(dbTodo => {
      res.json(dbTodo)
    })

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTodo => {
      res.json(dbTodo)
    })
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function (req, res) {

    let todo = {
      text: req.body.text,
      complete: req.body.complete
    }

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update

    db.Todo.update(
      todo, {
        where: {
          id: req.body.id
        }
      }).then(dbTodo => {
      res.json(dbTodo)
    })
  });
};