const Reservation =
require("../models/Reservation");

const sendReservationEmail =
require("../services/emailService");

exports.createReservation =
async (req, res) => {

  try {

    const bookingId =
    "RD" +
    Math.floor(
      100000 + Math.random() * 900000
    );

    const reservation =
    await Reservation.create({

      ...req.body,

      bookingId,

      status: "Confirmed"

    });

    await sendReservationEmail(
      reservation.email,
      reservation
    );

    res.status(201).json(
      reservation
    );

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getReservations =
async (req, res) => {

  try {

    const reservations =
      await Reservation.find();

    res.json(
      reservations
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};