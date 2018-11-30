$(document).ready(function() {
  // SMALL SPECIALTY BOX: Creates $4 column
  function createSmSpecialtyBox4() {
    let smSpecialtyBox4 = $(".smSpecialtyBox4");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smSpecialtyBox4.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smSpecialtyBox4.prepend(rowsToAdd);
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
        `<input type="radio" name="4" id="${product.title}" value="${product.title}">
        <label for="${product.title}">$${product.title}</label>
      </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL SPECIALTY BOX: Creates $5 column
  function createSmSpecialtyBox5() {
    let smSpecialtyBox5 = $(".smSpecialtyBox5");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smSpecialtyBox5.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smSpecialtyBox5.prepend(rowsToAdd);
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
        `<input type="radio" name="5" id="${product.title}" value="${product.title}">
      <label for="${product.title}">${product.title}</label>
    </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL SPECIALTY BOX: Creates $9 column
  function createSmSpecialtyBox9() {
    let smSpecialtyBox9 = $(".smSpecialtyBox9");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smSpecialtyBox9.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smSpecialtyBox9.prepend(rowsToAdd);
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
        `<input type="radio" name="9" id="${product.title}" value="${product.title}">
      <label for="${product.title}">${product.title}</label>
    </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL SPECIALTY BOX: Creates $15 column
  function createSmSpecialtyBox15() {
    let smSpecialtyBox15 = $(".smSpecialtyBox15");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smSpecialtyBox15.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smSpecialtyBox15.prepend(rowsToAdd);
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
        `<input type="radio" name="15" id="${product.title}" value="${product.title}">
      <label for="${product.title}">${product.title}</label>
    </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  createSmSpecialtyBox4();
  createSmSpecialtyBox5();
  createSmSpecialtyBox9();
  createSmSpecialtyBox15();

  let form = document.querySelector("#smSpecialtyBoxForm");

  form.addEventListener(
    "submit",
    function(event) {
      let data = new FormData(form);
      // let output = "";

      for (const entry of data) {
        // output = entry[0] + " = " + entry[1] + "\r";
      for (var i = 0; i < entry.length; i++) {
console.log("entry[i]", entry[i])
console.log(entry);
      }
    }
      event.preventDefault();
    },
    false
  );
});
