const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers("auth-token");
    if (!token) return res.status(401).json({ err: "Not Authorized" });

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified)
      return res
        .status(401)
        .json({ err: "Not Autorized--Token verification failed!" });

    req.user = verified.id;
    next();
  } catch (cond) {
    res.status(500).json({ error: err.message });
  }
};
