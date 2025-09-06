import mongoose from "mongoose";

const WhyChooseUsSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const SocialLinkSchema = new mongoose.Schema({
  name: String,
  link: String,
  icon: String,
});

const DeliveryPartnerSchema = new mongoose.Schema({
  name: String,
  icon: String,
  link: String,
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: String,
    picture: String,
    phone_1: String,
    phone_2: String,
    address: String,
    location_link: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    website: String,
    about: String,
    open_time: String,
    why_choose_us: [WhyChooseUsSchema],
    social_links: [SocialLinkSchema],
    delivery_partner: [DeliveryPartnerSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);
export default User;
