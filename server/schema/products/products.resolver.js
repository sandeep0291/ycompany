const Product = require("../../models/products");

module.exports = {
  Query: {
    Products: (parent, args) => {
      // return all products from DB
      return Product.find({}).skip(args.offset).limit(args.limit);
    },
    ProductSearchByName: (parent, args) => {
      return Product.find( {
        $or:[
          { name: { $regex: ".*" + args.name + ".*" } },
          { description: { $regex: ".*" + args.name + ".*" } }
        ]
      }).skip(args.offset).limit(args.limit) ;
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
