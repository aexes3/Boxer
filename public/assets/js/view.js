$(document).ready(function() {
  // Getting a reference to the input field where user adds a new product
  var $newItemInput = $("input.new-item");
  // Our new products will go inside the productContainer
  var $productContainer = $(".product-container");
  // Adding event listeners for deleting, editing, and adding products
 
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".product-item", editProduct);
  $(document).on("keyup", ".product-item", finishEdit);
  $(document).on("blur", ".product-item", cancelEdit);
  $(document).on("submit", "#product-form", insertProduct);
  // $(document).on("click", "button.etsy", insertEtsy);

  // Our initial products array
 var products;

  // Getting products from database when page loads
  getProducts();

  // This function resets the products displayed with new products from the database
  function initializeRows() {
    $productContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < products.length; i++) {
      rowsToAdd.push(createNewRow(products[i]));
    }
    $productContainer.prepend(rowsToAdd);
  }

  // This function grabs products from the database and updates the view
  function getProducts() {
    $.get("/api/products", function(data) {
      console.log(data);
      products=data;
        // for (var i = 0; i < data.length; i++) {
        //   console.log(data[i].title);
        //   $(".product-container").append("<p>" + data[i].title + "</p>");
        // }
      initializeRows();
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
// // JW guess at how to add radio buttons
//   function editProduct() {
//     var currentProduct = $(this).data("product");
//     $(this).children().hide();
//     $(this).children("input.edit").val(currentProduct.title);
//     $(this).children("input.edit").show();
//     $(this).children("input.edit").focus();
//   }

//   sub this for "input.edit"
//  '<input type="radio" id=' + post.title + " " + 'value=' + post.title + " " + '><label for='+ post.title + " " + '</label>'
  

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
      [
        "<li class='list-group-item product-item'>",
        "<span>",
        product.title,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("product", product);
    if (product.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
      console.log("product:", product);

    }
    return $newInputRow;
  }

  
// This function inserts a new product into our database and then updates the view
function insertProduct(event) {
  event.preventDefault();
  var product = {
    text: $newItemInput.val().trim(),
    complete: false
  };

  $.post("/api/products", product, getProducts);
  $newItemInput.val("");
}
});




