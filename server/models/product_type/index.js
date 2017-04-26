// SPIKE
  import mongoose from 'mongoose';
  const Schema = mongoose.Schema;

  const productTypeSchema = new Schema({
    name: { type: 'String', required: true },
    use: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
  });

  export default mongoose.model('ProductType', productTypeSchema);
