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
    unit_values: [{ type: String }],
    category: { type: String },
    sub_category: { type: String },

    features: [{ type: String }],
    tags: [{ type: String }],
    ingredients: [{ type: String }],
    creme: [{ type: String }],
    allergens: [{ type: String }],
    nutrition_info: {
      calories: { type: Number },
      sugar_g: { type: Number },
      fat_g: { type: Number },
      protein_g: { type: Number },
    },

    is_customizable: { type: Boolean, default: false },
    is_featured: { type: Boolean, default: false },
    isAvailable: { type: Boolean, default: true },
    is_eggless: { type: Boolean, default: false },
    is_publish: { type: Boolean, default: false },

    seller: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

cakeSchema.pre("save", function (next) {
  const discountedAmount = (this.price * this.discount) / 100;
  this.final_price = parseFloat((this.price - discountedAmount).toFixed(2));
  next();
});

const Cake = mongoose.model("cakes", cakeSchema);
export default Cake;
