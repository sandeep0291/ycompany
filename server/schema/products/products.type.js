module.exports = /* GraphQL */ `
  type Product {
    _id: ID
    name: String!
    categoryId: String!
    description: String
    image: String
    price: String!
  }

  type Query {
    Products: [Product]
    ProductSearchByName(name: String, description: String): [Product]
  }

  type Mutation {
    addProduct(name: String!, categoryId: String, description: String, price: String, image: String): Product
    deleteProduct(_id:ID):Product
  }

`