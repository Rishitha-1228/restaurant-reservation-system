import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "./Dashboard.css";

function Dashboard() {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {

    API.get("/api/reservations")
      .then((res) => {
        setReservations(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });

  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>📊 User Dashboard</h1>

        <div className="dashboard-summary">

          <div className="summary-card">
            <h2>{reservations.length}</h2>
            <p>Total Reservations</p>
          </div>

        </div>

        <h2 className="reservation-title">
          📋 My Reservations
        </h2>

        <div className="dashboard-list">

          {reservations.length === 0 ? (

            <p className="no-reservation">
              No Reservations Found
            </p>

          ) : (

            reservations.map((reservation) => (

              <div
                className="dashboard-card"
                key={reservation._id}
              >

                <h2>
                  🍽 {reservation.restaurant}
                </h2>

                <p>
                  📅 Date: {reservation.reservationDate}
                </p>

                <p>
                  ⏰ Time: {reservation.reservationTime}
                </p>

                <p>
                  👥 Guests: {reservation.guests}
                </p>
                <p>
  🆔 Booking:
  {reservation.bookingId}
</p>

<p>
  📌 Status:
  {reservation.status}
</p>

              </div>

            ))

          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;