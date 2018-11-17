
    const User = sequelize.define("user", {
        user_ID: DataTypes.int, allowNUll: false, autoIncrement: true, primaryKey: true,
		frequentShopper_ID: DataTypes.int,
        box_ID: DataTypes.int,
        emailAddress: DataType.string(50),
		lastProductViewed_ID: DataTypes.int,
		lastItemInCart_ID: DataTypes.int,
        subscriber: DataTypes.tinyint(1),
		subscriberFrequencyWeeks: DataTypes.int,
		lastSubscriptionDate: DataTypes.DATE, 
		firstName: DataType.string(50),
		lastName: DataType.string(50),
		address: DataType.string(50),
        city: DataType.string(50),
		state: DataType.string(50),
		zip: DataType.int,
		phone: DataType.string(20),
		active: DataType.tinyInt(1),
		wishList_ID: DataType.int,
        pet_ID: DataType.int,
        optIn: DataType.tinyint(1),
        lastLogin: DataType.date
    });


    const ProductView = sequelize.define("productView", {
        productView_ID: DataType.int, autoIncrement: true, allowNull: false, primaryKey:true,
        userID: DataType.int,
        listing_id: DataType.int,
        dateViewed: DataType.DATE,
        tags: DataType.string(100),
        ending_tsz: DataType.int,
        timesViewed: DataType.int
    });

    const Product = sequelize.define("product", {
        listing_id: DataType.int, autoIncrement: true, allowNull: false, primaryKey:true,
        active:DataType.tinyInt(1),
        title :DataType.BLOB,
        description :DataType.BLOB,
        price :DataType.decimal (20,2),
        currency_code :DataType.String(4),
        quantity: DataType.int,
        listingURL: DataType.String(255),
        imageURL: DataType.String(255),
        category_ID: DataType.int,
        shop_section_id: DataType.int,
        ending_tsz: DataType.int,
        subscriptionEligible: DataType.tinyInt(1),
        avgReviews: DataType.String(255),
        size: DataType.String(255),
        color: DataType.String(255),
        alias_ID: DataType.String(10),
        boxEligible: DataType.tinyInt(1),
        boxDiscountAmount:DataType.int,
        markupPercent:DataType.int

    });


const Pet = sequelize.define("pet", {

    pet_ID: DataType.int, primaryKey:true, allowNUll:false, autoIncrement:true,
    petName: DataType.String(255),
    user_ID: DataType.int,
    lastBox_ID:DataType.int,
    lastListing_ID:DataType.int
});

const Boxes=sequelize.define("boxes",{
    box_ID:DataType.int, allowNull: falser, autoIncrement: true, primaryKey: true,
    user_ID:DataType.int,
    pet_ID:DataType.int,
    items: DataType.BLOB,
    numberOfItems:DataType.int,
    averageDiscount: DataType.decimal(3,2),
    dateShipped: DataType.DATE,
    dateOrdered: DataType.Date,
    totalPrice: DataType.decimal(20,2),
    totalTax: Datatype.decimal (20,2),
    shippingAndFees: Datatype.decimal(20,2)
});

const ItemsSold=sequelize.define("itemsSold",{
    itemsSold_ID: DataType.int, allowNUll: false, autoIncrement: true, primaryKey: true,
    listing_ID: DataType.int,
    user_ID: DataType.int,
    box_ID: DataType.int,
    pet_ID: DataType.int,
    soldOn_Date: Datatype.Date,
    discounted: DataType.tinyInt(1),
    salesPrice: DataType.decimal(20,4),
    retailPrice: DataType.decimal(20,4),
    inBoxItem: DataType.tinyInt(1)

});
