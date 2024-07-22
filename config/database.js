const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
  console.log(`Connected to MongoDB to ${mongoose.connection.name}`);
})
.catch((err) => {
  console.error('Error connecting to Mongo', err);
});

// const plantSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   image: String,
// })

// const Plant = mongoose.model('Plant', plantSchema)
// module.exports = Plant

