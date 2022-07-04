const Product = require("../../models/products");

module.exports = {
  Query: {
    Products: () => {
      // return all products from DB
      return Product.find({});
    },
    ProductSearchByName: (parent, args) => {
      
      return Product.find({ name: { $regex: ".*" + args.name + ".*" } } ||
      { description: { $regex: ".*" + description.name + ".*" } }) ;
      //return product.findOne({name:args.name})
    },
  },
  
  Mutation: {
    addProduct: (parent, args) => {
      let newProduct = {
        name: args.name,
        categoryId: args.categoryId,
        description: args.description,
        image: args.image,
        price: args.price
      };
      return Product.create(newProduct);
    },
    deleteProduct: (parent, args) => {
      return Product.findByIdAndDelete({_id: args._id});
    },
  },
};

/*
mutation{
  addProduct(name:"PATHO",place:"5"){
    name,
    _id,
    place
  }
}

query{
  Product(_id:"6293675e190da5b7fa85c206"){
    name
    investigation{
      name
    }
  }
}

mutation{
  addProduct(name:"XRay",place:"7"){
    name,
    _id,
    place
  }
}

query{
  Products{
    name,
    _id,
    place
  }
}

*/
