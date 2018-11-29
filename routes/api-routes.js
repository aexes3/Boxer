// Dependencies
var db = require("../models");
const request = require("request");

// Routes
module.exports = function(app) {
  app.get("/api/getproducts", function(req, res) {
    let minPrice = "&min_price=3";
    let maxPrice = "&max_price=14";
    let tags = "&tags=dog_funny";
    let api = "&api_key=2ds0prvu2hqgcjocnj71ioss";

    const queryURL =
      "https://openapi.etsy.com/v2/listings/active?limit=100&includes=Images:1&state=active&category_path=Pets&category=pet_supplies" +
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
        console.log(json.results[0].images);
        if (json.length != 0) {
          for (let i = 0; i < json.results.length; i++) {
            db.Product.create({
              title: json.results[i].title,
              product_id: json.results[i].product_id,
              active: json.results[i].state,
              description: json.results[i].description,
              price: json.results[i].price,
              currency_code: json.results[i].currency_code,
              quantity: json.results[i].quantity,
              imageURL: json.results[i].Images[0].url_fullxfull,
              avgReviews:"Unknown",
              category:json.results[i].category_path.toString(),
              tags:json.results[i].tags.toString(),
              size:"Unknown",
              listingURL:json.results[i].url,
              category_ID:json.results[i].category_id,
              shop_section_id:json.results[i].shop_section_id,
              ending_tsz:json.results[i].ending_tsz,
              complete: false
            })
              .then(function(dbProduct) {
                res.json(dbProduct);
               
              })
              .catch(function(err) {
                res.json(err);
              });
              // res.redirect("/api/products")
          }
        }
      }
    })
  });



  //   request(queryURL, (err, response, body) => {
  //     if (err) {
  //       return console.log("\nError occurred: " + err);
  //     } else if (response.statusCode === 200) {
  //       let json = JSON.parse(body);
  //       if (json.length != 0) {
  //         for (let i = 0; i < json.results.length; i++) {
  //           db.Product.create({
  //             title: json.results[i].title,
  //             complete: false
  //           })
  //             .then(function(dbProduct) {
  //               res.json(dbProduct);
               
  //             })
  //             .catch(function(err) {
  //               res.json(err);
  //             });
  //             // res.redirect("/api/products")
  //         }
  //       }
  //     }
  //   })
  // });


  // firebase code to load data into our mysql database goes here  
  // https://www.ipragmatech.com/data-sync-firebase-mysql/
  // https://zapier.com/apps/firebase/integrations/mysql


          // GET route products
          app.get("/api/products", function(req, res) {
            db.Product.findAll({}).then(function(dbProduct) {
              console.log(dbProduct)
              res.json(dbProduct);
            });
          });

// create get route here with "between"
          //http://docs.sequelizejs.com/manual/tutorial/querying.html
          // db.Product.findAll({
          //   where: {
          //     price: {
          //       [Op.between]: [3, 4]
          //     }
          //   }
          // });
          





          // POST route for saving a new product
          app.post("/api/products", function(req, res) {
            db.Product.create({
              title: json.results[i].title,
              product_id: json.results[i].product_id,
              active: json.results[i].state,
              description: json.results[i].description,
              price: json.results[i].price,
              currency_code: json.results[i].currency_code,
              quantity: json.results[i].quantity,
              imageURL: json.results[i].Images[0].url_fullxfull,
              avgReviews:"Unknown",
              category:json.results[i].category_path.toString(),
              tags:json.results[i].tags.toString(),
              size:"Unknown",
              listingURL:json.results[i].url,
              category_ID:json.results[i].category_id,
              shop_section_id:json.results[i].shop_section_id,
              ending_tsz:json.results[i].ending_tsz,
              complete: false
            })
              .then(function(dbProduct) {
                res.json(dbProduct);
              })
              .catch(function(err) {
                res.json(err);
              });
          });



// // POST route for saving a new product
// app.post("/api/products", function(req, res) {
//   db.Product.create({
//     title: req.body.title,
//     complete: req.body.complete



    
//   })
//     .then(function(dbProduct) {
//       res.json(dbProduct);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });


          // PUT route for updating products
          app.put("/api/products", function(req, res) {
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
                res.json(err);
              });
          });
};


//   //       "https://openapi.etsy.com/v2/listings/active?limit=25&includes=Images:1&state=active&category_path=Pets&category=pet_supplies&api_key=2ds0prvu2hqgcjocnj71ioss&min_price=3&max_price=14&tags=dog_funny";

//     //     "https://openapi.etsy.com/v2/listings/active?limit=5&includes=Images:1&state=active&category_path=Pets&category=pet_supplies&api_key=2ds0prvu2hqgcjocnj71ioss&min_price=3&max_price=4&tags=dog_balm";

//         // request("https://openapi.etsy.com/v2/listings/active?limit=5&includes=Images:1&state=active&category_path=Pets&category=pet_supplies&api_key=2ds0prvu2hqgcjocnj71ioss&min_price=3&max_price=4&tags=dog_balm"

