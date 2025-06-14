const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // istəsən URL və ya base64
    sizes: [
      {
        size: { type: String, required: true },       // mini, kicik, orta, boyuk
        diameter: { type: Number, required: true },   // məsələn 17, 23, 30, 35
        price: { type: Number, required: true },       // qiymət
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pizza", pizzaSchema);
