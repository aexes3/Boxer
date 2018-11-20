//NMPs:
const request = require("request");
const chalk = require("chalk");

let two = process.argv[2];

function itemsForSale() {
  let three = process.argv[3];
  
    minPrice = "&min_price=5"
    maxPrice = "&max_price=15"
    tags = "&tags=dachshund_handcrafted";
   
  
  
  const queryURL =
  "https://openapi.etsy.com/v2/listings/active?limit=25&includes=Images:1&state=active&category_path=Pets&category=pet_supplies" + api + minPrice + maxPrice + tags;

  request(queryURL, (err, response, body) => {
    if (err) {
      return console.log("\nError occurred: " + err);
    } else if (response.statusCode === 200) {
      let jsonResponse = JSON.parse(body);
      if (jsonResponse.length != 0) {
        // console.log(chalk.blue(`\nbody: ${body}\n`))
        console.log(
          chalk.blue(
               `TITLE: ${jsonResponse.results[0].title}
                DESRIPTION: ${jsonResponse.results[0].description}
                PRICE: $${jsonResponse.results[0].price}
                CURRENCY: ${jsonResponse.results[0].currency_code}
                QUANTITY: ${jsonResponse.results[0].quantity}
                FAVS: ${jsonResponse.results[0].num_favorers}
                IMAGE: ${jsonResponse.results[0].Images[0].url_fullxfull}`)
        );

        console.log(chalk.cyan(`\nALL 25 RESULTS:`));
        for (let i = 0; i < jsonResponse.results.length; i++) {
          console.log(
            chalk.magenta(
            `TITLE: ${jsonResponse.results[0].title}
            DESRIPTION: ${jsonResponse.results[0].description}
            PRICE: $${jsonResponse.results[0].price}
            CURRENCY: ${jsonResponse.results[0].currency_code}
            QUANTITY: ${jsonResponse.results[0].quantity}
            FAVS: ${jsonResponse.results[0].num_favorers}
            IMAGE: ${jsonResponse.results[0].Images[0].url_fullxfull}`)
          );
        }
      }
    }
  });
}
itemsForSale();
