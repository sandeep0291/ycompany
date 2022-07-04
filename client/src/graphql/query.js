export const GET_ALL_PRODUCT_CATEGORY = `
  query {
    ProductCategories {
      name
      _id
    }
  }
`;

export const GET_ALL_PRODUCT = `
  query {
    Products {
      _id
      name
      description
      price
      image
    }
  }
`;

export const GET_PRODUCTS_BY_NAME = `
  query ProductSearchByName($name: String!) {
    ProductSearchByName(name: $name) {
      _id
      name
      description
      price
      image
    }
  }
`;
