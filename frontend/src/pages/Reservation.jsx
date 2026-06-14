import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "./Reservation.css";

function Reservation() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      restaurant: "",
      reservationDate: "",
      reservationTime: "",
      guests: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });

  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

     await API.post(
  "/api/reservations",
  formData
);

      alert(
        "Reservation Saved Successfully"
      );

      navigate("/payment");

    }

    catch (error) {

      console.log(error);

      alert(
        "Error Saving Reservation"
      );

    }

  };

  return (
    <>
      <Navbar />

      <div className="reservation-container">

        <div className="reservation-card">

          <h1>
            🍽 Reserve Your Table
          </h1>

          <form
            className="reservation-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <select
              name="restaurant"
              onChange={handleChange}
              required
            >
              <option value="">
                Select Restaurant
              </option>

              <option>
                Royal Palace
              </option>

              <option>
                Italian Delight
              </option>

              <option>
                Ocean Breeze
              </option>

            </select>

            <input
              type="date"
              name="reservationDate"
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="reservationTime"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="guests"
              placeholder="Guests"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
            >
              Reserve Now
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Reservation;