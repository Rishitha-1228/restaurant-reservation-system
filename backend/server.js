const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(
  "/api/restaurants",
  require("./routes/restaurantRoutes")
);

app.use(
  "/api/menus",
  require("./routes/menuRoutes")
);

app.use(
  "/api/reservations",
  require("./routes/reservationRoutes")
);

// Test Route
app.get("/", (req, res) => {
  res.send("Restaurant Reservation API Running...");
});
app.use(
 "/api/payment",
 require(
  "./routes/paymentRoutes"
 )
);
// Start Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server Running on Port ${PORT}`
  );
});