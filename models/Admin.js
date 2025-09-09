import mongoose from "mongoose";

const SocialLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String }, // optional
});

const DeliveryPartnerSchema = new mongoose.Schema({
  name: { type: String },
  picture: { type: String },
  link: { type: String },
});

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ["owner", "franchise"], default: "franchise" },
    logo: { type: String },
    picture: { type: String },
    phone_1: { type: String, required: true },
    phone_2: { type: String },
    address: { type: String, required: true },
    location_link: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    website: { type: String },
    about: { type: String },
    open_time: { type: String },
    why_choose_us: [{ type: String }],
    social_links: [SocialLinkSchema],
    delivery_partner: [DeliveryPartnerSchema],
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("admins", AdminSchema);
export default Admin;
