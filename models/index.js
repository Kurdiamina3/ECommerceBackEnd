// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'product_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
});

// Products belongToMany Tags (through ProductTag)

Product.belongToMany(Tag, {
  through: ProductTag,
  as: 'productTag_id',
  foreignKey:'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongToMany(Product, {
  through: ProductTag,
  as: 'productTag_id',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
