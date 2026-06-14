const nodemailer =
require("nodemailer");

const transporter =
nodemailer.createTransport({

  service: "gmail",

  auth: {

    user:
    process.env.EMAIL_USER,

    pass:
    process.env.EMAIL_PASS

  }

});

const sendReservationEmail =
async (
  email,
  reservation
) => {

  try {

    await transporter.sendMail({

      from:
      process.env.EMAIL_USER,

      to: email,

      subject:
      "🍽 Reservation Confirmed",

      html: `

      <div style="
      font-family:Arial;
      padding:20px">

      <h2 style="
      color:#d4af37">
      Royal Dine
      </h2>

      <h3>
      Reservation Confirmed
      </h3>

      <p>
      Booking ID:
      <b>
      ${reservation.bookingId}
      </b>
      </p>

      <p>
      Name:
      ${reservation.name}
      </p>

      <p>
      Restaurant:
      ${reservation.restaurant}
      </p>

      <p>
      Date:
      ${reservation.reservationDate}
      </p>

      <p>
      Time:
      ${reservation.reservationTime}
      </p>

      <p>
      Guests:
      ${reservation.guests}
      </p>

      <p>
      Status:
      ${reservation.status}
      </p>

      <hr>

      <h4>
      Thank you for choosing
      Royal Dine ❤️
      </h4>

      </div>

      `

    });

    console.log(
      "Email Sent"
    );

  }

  catch(error){

    console.log(error);

  }

};

module.exports =
sendReservationEmail;