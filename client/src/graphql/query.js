export const GET_ALL_PRODUCT_CATEGORY = `
  query {
    ProductCategories {
      name
      _id
    }
  }
`;

export const GET_ALL_PRODUCT = `
  query Products($limit: Int!, $offset: Int!){
    Products(limit: $limit, offset: $offset) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const GET_PRODUCTS_BY_NAME = `
  query ProductSearchByName($name: String!, $offset: Int!, $limit: Int!) {
    ProductSearchByName(name: $name, offset: $offset, limit: $limit) {
      _id
      name
      description
      price
      image
    }
  }
`;
