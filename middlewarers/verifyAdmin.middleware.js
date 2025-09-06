import jwt from "jsonwebtoken";
export const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token_token;
    // console.log("token :", token);
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.admin_id = decode.userId;
    next();
  } catch (error) {
    res.json({
      code: 500,
      status: "success",
      message: " Not Authorize",
      error: error.message,
    });
  }
};
