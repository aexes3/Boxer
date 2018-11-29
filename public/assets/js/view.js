$(document).ready(function() {  
  // Set up variables for each of product columns
  
  // SMALL CUSTOM BOX
  let smBox4 = $(".smBox4");
  let smBox5 = $(".smBox5");
  let smBox8 = $(".smBox8");
  let smBox14 = $(".smBox14");

  // LARGE CUSTOM BOX

  // SMALL SPECIALTY BOX

  // LARGE SPECIALTY BOX 


  // Get products from database when page loads
  getProducts();

  // Resets the products displayed with new products from the database
  function initializeRows(products) {
    smBox4.empty();
    smBox5.empty();
    smBox8.empty();
    smBox14.empty();
    var rowsToAdd = [];
    for (var i = 0; i < products.length; i++) {
      rowsToAdd.push(createNewRow(products[i]));
    }
    smBox4.prepend(rowsToAdd);
    smBox5.prepend(rowsToAdd);
    smBox8.prepend(rowsToAdd);
    smBox14.prepend(rowsToAdd);
  }

  // Grabs products from the database and updates the view
  function getProducts() {
    $.get("/api/products", function(products) {
      // console.log("products are:", products);
        
      // for (var i = 0; i < data.length; i++) {
        //   console.log(data[i].title);
        //   $(".smBox4").append("<p>" + data[i].title + "</p>");
        // }
      initializeRows(products);
    });
  }

  // MIGHT NEED THIS... 
  // This function starts updating a product in the database if a user hits the "Enter Key"
  // While in edit mode
  // function finishEdit(event) {
  //   var updatedProduct = $(this).data("product");
  //   if (event.which === 13) {
  //     updatedProduct.title = $(this).children("input").val().trim();
  //     $(this).blur();
  //     updateProduct(updatedProduct);
  //   }
  // }

  // This function updates a product in our database
  function updateProduct(product) {
    $.ajax({
      method: "PUT",
      url: "/api/products",
      data: product
    }).then(getProducts);
  }

  // Constructs a product-item row
  function createNewRow(product) {
    var $newInputRow = $(
    `<input type="radio" id="${product.title}" value="${product.title}">
      <label for="${product.title}">${product.title}</label>
    </input>`
    );
    // mdn article radio button to select only one

    // $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("product", product);
    return $newInputRow;
  }
});




