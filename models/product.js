module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a product from being entered if it doesn't
      // have a title value
      allowNull: false,
      // len is a validation that checks that our product is between 1 and 140 characters
      validate: {
        len: [1]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new products complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Product;
};

// module.exports = function(sequelize, DataTypes) {
//     var Post = sequelize.define("Post", {
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       body: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       category: {
//         type: DataTypes.STRING,
//         defaultValue: "Personal"
//       }
//     });
//     return Post;
//   };