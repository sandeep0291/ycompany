const { aggregate } = require("../../models/products");
const ProductCategories = require("../../models/productsCategory");

module.exports = {
  Query: {
    ProductCategories: () => {
      // return all doctor from DB
      return ProductCategories.find({});
      //return Doctor.findOne({name:args.name})
    },
    ProductCategory: (parent, args) => {
      // return a doctor from DB
      return ProductCategories.findOne({_id: args._id});
      //return Doctor.findOne({name:args.name})
    },
  },
  
  Mutation: {
    addProductCategory: (parent, args) => {
      let newProduct = {
        name: args.name,
        categoryId: args.categoryId,
        description: args.description,
        price: args.price
      };
      return ProductCategories.create(newProduct);
    },
    deleteProductCategory: (parent, args) => {
      return ProductCategories.findByIdAndDelete({_id: args._id});
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
