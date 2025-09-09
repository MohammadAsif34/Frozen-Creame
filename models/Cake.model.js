import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    picture: { type: String, default: "" },
    flavour: { type: String },

    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    final_price: { type: Number },
    sold: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    prepare_time: { type: Number },
    unit: { type: String },
    unit_value: [{ type: String }],
    category: { type: String },
    sub_category: { type: String },

    features: [{ type: String }],
    tags: [{ type: String }],
    ingredients: [{ type: String }],
    creme: [{ type: String }],
    allergens: [{ type: String }],
    nutrition_info: {
      calories: { type: Number },
      sugar: { type: Number },
      fat: { type: Number },
      protein: { type: Number },
    },

    customizable: { type: Boolean, default: false },
    eggless: { type: Boolean, default: false },
    available: { type: Boolean, default: false },
    publish: { type: Boolean, default: false },

    seller: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

cakeSchema.pre("save", function (next) {
  const discountedAmount = (this.price * this.discount) / 100;
  this.final_price = parseFloat((this.price - discountedAmount).toFixed(2));
  if (this.stock > 0) {
    this.available = true;
  }
  next();
});

const Cake = mongoose.model("cakes", cakeSchema);
export default Cake;
