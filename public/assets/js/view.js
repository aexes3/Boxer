$(document).ready(function() {

  // SMALL CUSTOM BOX
  // SMALL BOX: Creates $4 column
  function createSmBox4() {
    let smBox4 = $(".smBox4");
      // Get products from database when page loads

    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox4.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox4.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/4products", function(products) {
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
      <label for="${product.title}">$${product.price}</label>
    </input>`
    // `<input type="radio" id="${product.title}" value="${product.title}">
    //   <label for="${product.title}">price:$${product.price},${product.title}</label>
    // </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL CUSTOM BOX: Creates $5 column
  function createSmBox5() {
    let smBox5 = $(".smBox5");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox5.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox5.prepend(rowsToAdd);
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
        `<input type="radio" id="${product.title}" value="${product.title}">
        <label for="${product.title}">$${product.price}</label>
      </input>`
    //     `<input type="radio" id="${product.title}" value="${product.title}">
    //   <label for="${product.title}">${product.title}</label>
    // </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL CUSTOM BOX: Creates $8 column
  function createSmBox8() {
    let smBox8 = $(".smBox8");
      // Get products from database when page loads

    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox8.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox8.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/8products", function(products) {
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
        <label for="${product.title}">$${product.price}</label>
      </input>`
    //     `<input type="radio" id="${product.title}" value="${product.title}">
    //   <label for="${product.title}">${product.title}</label>
    // </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL CUSTOM BOX: Creates $14 column
  function createSmBox14() {
    let smBox14 = $(".smBox14");

    // Get products from database when page loads
    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox14.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox14.prepend(rowsToAdd);
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
        `<input type="radio" id="${product.title}" value="${product.title}">
        <label for="${product.title}">$${product.price}</label>
      </input>`
    //     `<input type="radio" id="${product.title}" value="${product.title}">
    //   <label for="${product.title}">${product.title}</label>
    // </input>`
      );
      // mdn article radio button to select only one

      // $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  createSmBox4();
  createSmBox5();
  createSmBox8();
  createSmBox14();
});  
//  NEED THIS IF BREAK THESE APART INTO SEP PAGES



// // LARGE CUSTOM BOX 
//   // LARGE BOX: Creates $4 column
//   function createLgBox4() {
//     let lgBox4 = $(".lgBox4");
//       // Get products from database when page loads

//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgBox4.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgBox4.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgBox4").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // LARGE CUSTOM BOX: Creates $5 column
//   function createLgBox5() {
//     let lgBox5 = $(".lgBox5");

//     // Get products from database when page loads
//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgBox5.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgBox5.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgBox5").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // LARGE BOX: Creates $8 column
//   function createLgBox8() {
//     let lgBox8 = $(".lgBox8");
//       // Get products from database when page loads

//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgBox8.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgBox8.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgBox8").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // LARGE BOX: Creates $14 column
//   function createLgBox14() {
//     let lgBox14 = $(".lgBox14");

//     // Get products from database when page loads
//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgBox14.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgBox14.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgBox14").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   createLgBox4();
//   createLgBox5();
//   createLgBox8();
//   createLgBox14();
// // });  NEED THIS IF BREAK INTO SEP FILES


// // SMALL SPECIALTY BOX
//   // SMALL SPECIALTY BOX: Creates $4 column
//   function createSmSpecialtyBox4() {
//     let smSpecialtyBox4 = $(".smSpecialtyBox4");
//       // Get products from database when page loads

//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       smSpecialtyBox4.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       smSpecialtyBox4.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".smSpecialtyBox4").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // SMALL SPECIALTY BOX: Creates $5 column
//   function createSmSpecialtyBox5() {
//     let smSpecialtyBox5 = $(".smSpecialtyBox5");

//     // Get products from database when page loads
//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       smSpecialtyBox5.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       smSpecialtyBox5.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".smSpecialtyBox5").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // SMALL SPECIALTY BOX: Creates $9 column
//   function createSmSpecialtyBox9() {
//     let smSpecialtyBox9 = $(".smSpecialtyBox9");
//       // Get products from database when page loads

//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       smSpecialtyBox9.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       smSpecialtyBox9.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".smSpecialtyBox9").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // SMALL SPECIALTY BOX: Creates $15 column
//   function createSmSpecialtyBox15() {
//     let smSpecialtyBox15 = $(".smSpecialtyBox15");

//     // Get products from database when page loads
//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       smSpecialtyBox15.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       smSpecialtyBox15.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".smSpecialtyBox15").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   createSmSpecialtyBox4();
//   createSmSpecialtyBox5();
//   createSmSpecialtyBox9();
//   createSmSpecialtyBox15();
// // });   NEED THIS IF BREAK THESE APART INTO SEP PAGES



// // LARGE SPECIALTY BOX 
//   // LARGE SPECIALTY BOX: Creates $4 column
//   function createLgSpecialtyBox4() {
//     let lgSpecialtyBox4 = $(".lgSpecialtyBox4");
//       // Get products from database when page loads

//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgSpecialtyBox4.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgSpecialtyBox4.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgSpecialtyBox4").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // LARGE SPECIALTY BOX: Creates $5 column
//   function createLgSpecialtyBox5() {
//     let lgSpecialtyBox5 = $(".lgSpecialtyBox5");

//     // Get products from database when page loads
//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgSpecialtyBox5.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgSpecialtyBox5.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgSpecialtyBox5").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // LARGE SPECIALTY BOX: Creates $9 column
//   function createLgSpecialtyBox9() {
//     let lgSpecialtyBox9 = $(".lgSpecialtyBox9");
//       // Get products from database when page loads

//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgSpecialtyBox9.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgSpecialtyBox9.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgSpecialtyBox9").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   // LARGE SPECIALTY BOX: Creates $15 column
//   function createLgSpecialtyBox15() {
//     let lgSpecialtyBox15 = $(".lgSpecialtyBox15");

//     // Get products from database when page loads
//     getProducts();

//     // Resets the products displayed with new products from the database
//     function initializeRows(products) {
//       lgSpecialtyBox15.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < 5; i++) {
//         rowsToAdd.push(createNewRow(products[i]));
//       }
//       lgSpecialtyBox15.prepend(rowsToAdd);
//     }

//     // Grabs products from the database and updates the view
//     function getProducts() {
//       $.get("/api/products", function(products) {
//         // console.log("products are:", products);

//         // for (var i = 0; i < data.length; i++) {
//         //   console.log(data[i].title);
//         //   $(".lgSpecialtyBox15").append("<p>" + data[i].title + "</p>");
//         // }
//         initializeRows(products);
//       });
//     }

//     // MIGHT NEED THIS...
//     // This function starts updating a product in the database if a user hits the "Enter Key"
//     // While in edit mode
//     // function finishEdit(event) {
//     //   var updatedProduct = $(this).data("product");
//     //   if (event.which === 13) {
//     //     updatedProduct.title = $(this).children("input").val().trim();
//     //     $(this).blur();
//     //     updateProduct(updatedProduct);
//     //   }
//     // }

//     // This function updates a product in our database
//     function updateProduct(product) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/products",
//         data: product
//       }).then(getProducts);
//     }

//     // Constructs a product-item row
//     function createNewRow(product) {
//       var $newInputRow = $(
//         `<input type="radio" id="${product.title}" value="${product.title}">
//       <label for="${product.title}">${product.title}</label>
//     </input>`
//       );
//       // mdn article radio button to select only one

//       // $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("product", product);
//       return $newInputRow;
//     }
//   }

//   createLgSpecialtyBox4();
//   createLgSpecialtyBox5();
//   createLgSpecialtyBox9();
//   createLgSpecialtyBox15();
// });












