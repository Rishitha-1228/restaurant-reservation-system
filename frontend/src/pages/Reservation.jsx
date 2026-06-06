import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "./Reservation.css";

function Reservation() {

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

    await API.post(
      "/reservations",
      formData
    );

    alert(
      "Reservation Saved Successfully"
    );

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
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <select
              name="restaurant"
              onChange={handleChange}
            >
              <option>
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
            />

            <input
              type="time"
              name="reservationTime"
              onChange={handleChange}
            />

            <input
              type="number"
              name="guests"
              placeholder="Guests"
              onChange={handleChange}
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