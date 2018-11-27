// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

const request = require("request");
const chalk = require("chalk");
// Requiring our models


// Routes
// =============================================================
module.exports = function(app) {

  // JW'S API POST ROUTE
  // POST route for saving a new product
  app.get("/api/products", function(req, res) {
    // app.post("/api/products", function(req, res) {
    console.log(chalk.red("did it go this far?"));
    let minPrice = "&min_price=5";
    let maxPrice = "&max_price=15";
    let tags = "&tags=dachshund_handcrafted";
    let api = "&api_key=fillthisin";

    const queryURL =
      "https://openapi.etsy.com/v2/listings/active?limit=25&includes=Images:1&state=active&category_path=Pets&category=pet_supplies" +
      api +
      minPrice +
      maxPrice +
      tags;

    console.log("queryURL:", queryURL);

    request(queryURL, (err, response, body) => {
      if (err) {
        return console.log("\nError occurred: " + err);
      } else if (response.statusCode === 200) {
        let json = JSON.parse(body);
        if (json.length != 0) {
          for (let i = 0; i < json.results.length; i++) {
            console.log(
              chalk.magenta(
                `TITLE: ${json.results[i].title}, PRICE: $${
                  json.results[i].price
                }`
              )
            );
            db.Product.create({
              title: json.results[i].title,
              complete: false
            })
              .then(function(dbProduct) {
                // We have access to the new product as an argument inside of the callback function
                res.json(dbProduct);
              })
              .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
              });
          }
  // GET route for getting all of the products
  app.get("/api/products", function(req, res) {
    console.log(chalk.yellow("did it go this far?"));
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProduct) {
      // We have access to the products as an argument inside of the callback function
      res.json(dbProduct);
    });
  });


// POST route for saving a new product
app.post("/api/products", function(req, res) {
  console.log(chalk.yellow("did it go this far?"));
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a title
  // and complete property (req.body)
  db.Product.create({
    title: req.body.title,
    complete: req.body.complete
  })
    .then(function(dbProduct) {
      // We have access to the new product as an argument inside of the callback function
      res.json(dbProduct);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
});


          // DELETE route for deleting products. We can get the id of the product to be deleted from
          // req.params.id
          app.delete("/api/products/:id", function(req, res) {
            // We just have to specify which product we want to destroy with "where"
            db.Product.destroy({
              where: {
                id: req.params.id
              }
            }).then(function(dbProduct) {
              res.json(dbProduct);
            });
          });

          // PUT route for updating products. We can get the updated product data from req.body
          app.put("/api/products", function(req, res) {
            console.log(chalk.yellow("did it go this far?"));
            // Update takes in an object describing the properties we want to update, and
            // we use where to describe which objects we want to update
            db.Product.update(
              {
                title: req.body.title,
                complete: req.body.complete
              },
              {
                where: {
                  id: req.body.id
                }
              }
            )
              .then(function(dbProduct) {
                res.json(dbProduct);
              })
              .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
              });
          });
        }
      }
    });
  });
};
