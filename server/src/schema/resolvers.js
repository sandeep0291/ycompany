const { mergeResolvers } = require('@graphql-tools/merge')
const Product = require('./products/products.resolver');
const ProductCategory = require('./productCategory/productCategory.resolver')

const resolvers = [Product, ProductCategory]

module.exports = mergeResolvers(resolvers)