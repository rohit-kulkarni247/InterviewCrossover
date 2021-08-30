import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(
      token,
      "asdkjfqlwqn123894asdkjlfkb21983hncanskdj1i324rasdbjkf89yt5wh7g"
    );
    req.userId = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Not authorized to access this route" });
  }
};

export default auth;
