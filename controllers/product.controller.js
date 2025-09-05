import Cake from "../models/Cake.model.js";
import uploadBuffer from "../utils/uploadBuffer.js";
// import { uploadBuffer } from "../utils/uploadBuffer.js";

// create new product item
export const createProduct = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const { sku, name, price, ...rest } = data;

    // Validate required fields
    if (!sku || !name || !price) {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: "Please fill essential data (sku, name, price).",
      });
    }

    let picture_url =
      "https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img-1024x1024.gif";
    if (req.file) {
      const upload_result = await uploadBuffer(
        req.file.buffer,
        "frozencreame/cakes"
      );
      picture_url = upload_result.secure_url;
    }

    // Save new cake
    const newCake = new Cake({
      sku,
      name,
      price,
      picture: picture_url,
      ...rest,
    });

    console.log(newCake);
    await newCake.save();
    console.log("new cake upload");

    res.status(201).json({
      code: 201,
      status: "success",
      message: "New Cake added successfully",
      newCake,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: "error",
      msg: "Something went wrong",
      error: err.message,
    });
  }
};

// update cake item porduct
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  console.log("product update :: ", id);
  console.log(req.body);

  try {
    const cake = await Cake.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    await cake.save();
    console.log(cake);

    res.json({
      code: 200,
      status: "success",
      message: "Product updated",
      cake,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "something went worng",
      error: err.message,
    });
  }
};

// get all cake product
export const allProducts = async (req, res) => {
  try {
    // console.log("cake");
    const cake = await Cake.find();
    res.json({
      code: 200,
      status: "success",
      cake,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "something went wrong",
      error: `${err.keyValue}  duplicate found!`,
    });
  }
};

//get publish cake
export const allPublishProducts = async (req, res) => {
  try {
    console.log("cake");
    const cake = await Cake.find({ is_publish: true });
    console.log(cake);
    res.json({
      code: 200,
      status: "success",
      cake,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "something went wrong",
      error: `${err.keyValue}  duplicate found!`,
    });
  }
};

// get single cake by id
export const getProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const cake = await Cake.findById(id);
    if (!cake) {
      return res.json({
        code: 200,
        status: "failed",
        message: "product not found. Something went wrong.",
      });
    }
    res.json({
      code: 200,
      status: "success",
      cake,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "something went wrong",
      error: err.message,
    });
  }
};

export const publishProduct = async (req, res) => {
  console.log("publish");
  const id = req.params.id;
  const { type } = req.query;
  console.log(id, type);
  try {
    const cake = await Cake.findByIdAndUpdate(
      id,
      { is_publish: type === "true" },
      { new: true }
    );
    console.log(cake);
    if (!cake) {
      return res.json({
        code: 200,
        status: "failed",
        message: "product not found. Something went wrong.",
      });
    }
    res.json({
      code: 200,
      status: "success",
      message: `product ${type === "true" ? "published" : "suspended"}`,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "something went wrong",
      error: err.message,
    });
  }
};
