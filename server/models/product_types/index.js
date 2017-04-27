// SPIKE
  import cuid from 'cuid';
  import Backbone from 'backbone';

  const content = [
    ['Appliances', 'part'],
    ['Heating & Cooling', 'part'],
    ['Outdoor', 'part'],
    ['Power Tools', 'part'],
    ['Accessories', 'tool'],
    ['Attachments', 'tool'],
    ['Hand Tools', 'tool'],
    ['Power Tools', 'tool'],
  ];

  const ProductTypeModel = Backbone.Model.extend({})

  const ProductTypeCollection = Backbone.Collection.extend({model: ProductTypeModel});

  const productTypes = new ProductTypeCollection(content.map(item => (
    {
      name: item[0],
      use: item[1],
      _id: cuid(),
    }
  )));

  export default productTypes;
