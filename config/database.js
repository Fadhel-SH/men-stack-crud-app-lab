const mongoose = require('mongoose')
mongoose.connect(process.env.Database_URI)

const db = mongoose.connection;

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
})

const Plant = mongoose.model('Plant', plantSchema)
module.exports = Plant

db.on("connected", () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
    }
)