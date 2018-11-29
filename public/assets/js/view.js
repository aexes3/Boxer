$(document).ready(function() {
  // Getting a reference to the input field where user adds a new product
  // var $newItemInput = $("input.new-item");
  // Our new products will go inside the productContainer
  let smBox4 = $(".smBox4");
  // Adding event listeners for deleting, editing, and adding products
 
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".product-item", editProduct);
  $(document).on("keyup", ".product-item", finishEdit);
  $(document).on("blur", ".product-item", cancelEdit);
  
  // Initial products array

  // Getting products from database when page loads
  getProducts();

  // This function resets the products displayed with new products from the database
  function initializeRows(products) {
    smBox4.empty();
    var rowsToAdd = [];
    for (var i = 0; i < products.length; i++) {
      rowsToAdd.push(createNewRow(products[i]));
    }
    smBox4.prepend(rowsToAdd);
  }

  // This function grabs products from the database and updates the view
  function getProducts() {
    $.get("/api/products", function(products) {
      console.log(products);
        
      // for (var i = 0; i < data.length; i++) {
        //   console.log(data[i].title);
        //   $(".smBox4").append("<p>" + data[i].title + "</p>");
        // }
      initializeRows(products);
    });
  }

    // This function handles showing the input box for a user to edit a product
  function editProduct() {
    var currentProduct = $(this).data("product");
    $(this).children().hide();
    $(this).children("input.edit").val(currentProduct.title);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var product = $(this).parent().data("product");
    product.complete = !product.complete;
    updateProduct(product);
  }

  // This function starts updating a product in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedProduct = $(this).data("product");
    if (event.which === 13) {
      updatedProduct.title = $(this).children("input").val().trim();
      $(this).blur();
      updateProduct(updatedProduct);
    }
  }

  // This function updates a product in our database
  function updateProduct(product) {
    $.ajax({
      method: "PUT",
      url: "/api/products",
      data: product
    }).then(getProducts);
  }

  // This function is called whenever a product item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentProduct = $(this).data("product");
    if (currentProduct) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentProduct.title);
      $(this).children("span").show();
      $(this).children("button").show();
    }
  }

  // This function constructs a product-item row
  function createNewRow(product) {
    console.log("THIS WORKS!product", product.title);
    console.log("THIS WORKS!ID", product.id);
    var $newInputRow = $(
    `<input type="radio" id="${product.title}" value="${product.title}">
      <label for="${product.title}">${product.title}</label>
    </input>`
    );
    // mdn article radio button to select only one

    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("product", product);
    // if (product.complete) {
    //   $newInputRow.find("span").css("text-decoration", "line-through");
    //   console.log("product:", product);

    // }
    return $newInputRow;
  }
});




