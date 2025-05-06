import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token =
    req.headers.authorization?.split(" ")[1] || req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Access token required" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid access token" });
    req.user = decoded;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Admin access required" });
  next();
};

export { authenticateToken, isAdmin }; // Export named exports
