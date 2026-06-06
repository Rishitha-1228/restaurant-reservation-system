const Reservation =
require("../models/Reservation");

exports.createReservation =
async (req, res) => {

  try {

    const reservation =
      await Reservation.create(
        req.body
      );

    res.status(201).json(
      reservation
    );

  } catch (error) {

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