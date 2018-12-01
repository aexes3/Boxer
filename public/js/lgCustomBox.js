$(document).ready(function() {
  $('[data-toggle="popover"]').popover();

  // LARGE CUSTOM BOX: Creates $4 column
  function createLgBox4() {
    let lgBox4 = $(".lgBox4");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgBox4.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgBox4.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/4products", function(products) {
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
    `<ul><li><input type="radio" name="4" id="${product.product_ID}" 
  value="${product.product_ID}">
  <label for="${product.product_ID}">
  <a href="#" data-toggle="popover" title="${product.title}">
  <img src="${product.imageURL}" width="175" height="175">
    </img></a></label></input><div class="check"></div></li>
    </ul>`
  );
  $newInputRow.data("product", product);
  return $newInputRow;
}
}

  // LARGE CUSTOM BOX: Creates $5 column
  function createLgBox5() {
    let lgBox5 = $(".lgBox5");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgBox5.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgBox5.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/5products", function(products) {
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
    `<ul><li><input type="radio" name="5" id="${product.product_ID}"  
  value="${product.product_ID}">
  <label for="${product.product_ID}">
  <a href="#" data-toggle="popover" title="${product.title}">
  <img src="${product.imageURL}" width="175" height="175">
        </img></a></label></input><div class="check"></div></li>
        </ul>`
  );
  $newInputRow.data("product", product);
  return $newInputRow;
}
}

  // LARGE BOX: Creates $9 column
  function createLgBox9() {
    let lgBox9 = $(".lgBox9");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgBox9.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgBox9.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/9products", function(products) {
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
        `<ul><li><input type="radio" name="9" id="${product.product_ID}"  
      value="${product.product_ID}">
      <label for="${product.product_ID}">
      <a href="#" data-toggle="popover" title="${product.title}">
      <img src="${product.imageURL}" width="175" height="175">
        </img></a></label></input><div class="check"></div></li>
        </ul>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
    }

  // LARGE BOX: Creates $14 column
  function createLgBox14() {
    let lgBox14 = $(".lgBox14");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgBox14.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgBox14.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/14products", function(products) {
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
        `<ul><li><input type="radio" name="14" id="${product.product_ID}" 
      value="${product.product_ID}">
      <label for="${product.product_ID}">
      <a href="#" data-toggle="popover" title="${product.title}">
      <img src="${product.imageURL}" width="175" height="175">
        </img></a></label></input><div class="check"></div></li>
        </ul>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
    }

  createLgBox4();
  createLgBox5();
  createLgBox9();
  createLgBox14();

  let form = document.querySelector("#lgBoxForm");

  form.addEventListener(
    "submit",
    function(event) {
      let data = new FormData(form);
      // let output = "";

      for (const entry of data) {
        // output = entry[0] + " = " + entry[1] + "\r";
        for (var i = 0; i < entry.length; i++) {
          
          console.log(entry);
        }
      }
      event.preventDefault();
    },
    false
  );
});
