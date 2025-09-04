import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadBuffer = (fileBuffer, folder = "frozencreame") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
        transformation: [
          {
            aspect_ratio: "3:2",
            crop: "fill",
            gravity: "auto",
          },
        ],
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

export default uploadBuffer;
