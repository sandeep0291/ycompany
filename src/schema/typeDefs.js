const { mergeTypeDefs } = require('@graphql-tools/merge')
const Product = require('./products/products.type')
const ProductCategory = require('./productCategory/productCategory.type')

const types = [Product, ProductCategory]

module.exports = mergeTypeDefs(types)