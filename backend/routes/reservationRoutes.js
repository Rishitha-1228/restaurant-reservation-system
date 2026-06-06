const express = require("express");

console.log("✅ reservationRoutes.js loaded");

const router = express.Router();

const {
  createReservation,
  getReservations
} = require("../controllers/reservationController");

router.post("/", createReservation);

router.get("/", getReservations);

module.exports = router;