import "./PaymentSuccess.css";

function PaymentSuccess() {

  return (

    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>
          Payment Successful
        </h1>

        <p>
          Your reservation has been confirmed.
        </p>

        <div className="booking-details">

          <p>
            🍽 Restaurant:
            <strong> Royal Dine</strong>
          </p>

          <p>
            💳 Payment:
            <strong> ₹500 Paid</strong>
          </p>

          <p>
            📅 Status:
            <strong> Confirmed</strong>
          </p>

        </div>

        <div className="success-buttons">

          <a
            href="/dashboard"
            className="btn-dashboard"
          >
            View Dashboard
          </a>

          <a
            href="/"
            className="btn-home"
          >
            Back To Home
          </a>

        </div>

      </div>

    </div>

  );

}

export default PaymentSuccess;