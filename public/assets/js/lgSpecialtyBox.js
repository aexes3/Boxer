$(document).ready(function() {
  $('[data-toggle="popover"]').popover();

  // LARGE SPECIALTY BOX: Creates $4 column
  function createLgSpecialtyBox4() {
    let lgSpecialtyBox4 = $(".lgSpecialtyBox4");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgSpecialtyBox4.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgSpecialtyBox4.prepend(rowsToAdd);
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
        `<input type="radio" name="4" id="${product.product_ID}" 
      value="${product.product_ID}">
      <label for="${product.product_ID}">
      <a href="#" data-toggle="popover" title="${product.title}">
      <img src="${product.imageURL}" margin="2%" width="175" height="175">
      </img></a></label></input>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
    }

  // LARGE SPECIALTY BOX: Creates $5 column
  function createLgSpecialtyBox5() {
    let lgSpecialtyBox5 = $(".lgSpecialtyBox5");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgSpecialtyBox5.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgSpecialtyBox5.prepend(rowsToAdd);
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
        `<input type="radio" name="4" id="${product.product_ID}" 
      value="${product.product_ID}">
      <label for="${product.product_ID}">
      <a href="#" data-toggle="popover" title="${product.title}">
      <img src="${product.imageURL}" margin="2%" width="175" height="175">
      </img></a></label></input>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
    }

  // LARGE SPECIALTY BOX: Creates $9 column
  function createLgSpecialtyBox9() {
    let lgSpecialtyBox9 = $(".lgSpecialtyBox9");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgSpecialtyBox9.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgSpecialtyBox9.prepend(rowsToAdd);
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
        `<input type="radio" name="4" id="${product.product_ID}" 
      value="${product.product_ID}">
      <label for="${product.product_ID}">
      <a href="#" data-toggle="popover" title="${product.title}">
      <img src="${product.imageURL}" margin="2%" width="175" height="175">
      </img></a></label></input>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
    }

  // LARGE SPECIALTY BOX: Creates $15 column
  function createLgSpecialtyBox15() {
    let lgSpecialtyBox15 = $(".lgSpecialtyBox15");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      lgSpecialtyBox15.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      lgSpecialtyBox15.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/15products", function(products) {
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
        `<input type="radio" name="4" id="${product.product_ID}" 
      value="${product.product_ID}">
      <label for="${product.product_ID}">
      <a href="#" data-toggle="popover" title="${product.title}">
      <img src="${product.imageURL}" margin="2%" width="175" height="175">
      </img></a></label></input>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
    }

  createLgSpecialtyBox4();
  createLgSpecialtyBox5();
  createLgSpecialtyBox9();
  createLgSpecialtyBox15();

  let form = document.querySelector("#lgSpecialtyBoxForm");

  form.addEventListener(
    "submit",
    function(event) {
      let data = new FormData(form);
      // let output = "";

      for (const entry of data) {
        // output = entry[0] + " = " + entry[1] + "\r";
        for (var i = 0; i < entry.length; i++) {
          console.log("entry[i]", entry[i]);
          console.log(entry);
        }
      }
      event.preventDefault();
    },
    false
  );
});
