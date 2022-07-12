module.exports = /* GraphQL */ `
  type ProductCategory {
    _id: ID
    name: String!
  }

  type Query {
    ProductCategories: [ProductCategory]
    ProductCategory(_id: ID): ProductCategory
  }

  type Mutation {
    addProductCategory(name: String!): ProductCategory
    deleteProductCategory(_id:ID):ProductCategory
  }

`