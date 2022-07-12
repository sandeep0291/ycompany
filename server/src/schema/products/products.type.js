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
    Products(limit: Int, offset: Int): [Product]
    ProductSearchByName(name: String, offset: Int, limit: Int): [Product]
  }

  type Mutation {
    addProduct(name: String!, categoryId: String, description: String, price: String, image: String): Product
    deleteProduct(_id:ID):Product
  }

`