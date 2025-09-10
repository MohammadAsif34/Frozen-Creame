import Cake from "../../models/Cake.model.js";
import User from "../../models/Users.model.js";
import uploadBuffer from "../../utils/uploadBuffer.js";

export const createProduct = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    let picture_url =
      "https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img-1024x1024.gif";

    if (req.file) {
      const upload = await uploadBuffer(req.file.buffer, "frozen_kreme/cakes");
      picture_url = upload.secure_url;
    }
    const newItem = new Cake({ ...data, picture: picture_url });
    await newItem.save();

    res.json({
      code: 200,
      status: "success",
      message: "product added",
      data: newItem,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};
export const updateProductdetails = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Cake.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true, runValidators: true }
    );
    await item.save();
    res.json({
      code: 200,
      status: "success",
      message: "product updated",
      data: item,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};
export const updateProductImage = async (req, res) => {
  try {
    res.json({
      code: 200,
      status: "success",
      message: "product added",
      data: newItem,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};

export const publishProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    const item = await Cake.findById(id);
    if (!item)
      return res.json({
        code: 404,
        status: "unseccess",
        message: "something went wrong",
      });
    item.publish = type === "publish";
    item.save();
    res.json({
      code: 200,
      status: "success",
      message: `product ${type === "publish" ? "published" : "suspended"} `,
      data: item,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};
export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Cake.findById(id);
    if (!item) {
      return res.json({
        code: 404,
        status: "unsuccess",
        message: "product not found",
      });
    }
    res.json({
      code: 200,
      status: "success",
      message: "product fetched",
      data: item,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};
export const getAllProduct = async (req, res) => {
  try {
    const item = await Cake.find({ seller: req.admin_id });
    res.json({
      code: 200,
      status: "success",
      message: "product fetch",
      data: item,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const id = req.userId;
    // const user = await User.findById(id);
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user)
      return res.json({
        code: 404,
        status: "unsuccess",
        message: "user not found",
        id,
      });
    // Object.assign(user, req.body);
    // await user.save();

    res.json({
      code: 200,
      status: "success",
      message: "user updated",
      data: user,
    });
  } catch (error) {
    res.json({ code: 500, status: "unsuccess", message: error.message });
  }
};
