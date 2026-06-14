import API from "../services/api";
import "./Payment.css";

function Payment() {

  const handlePayment = async () => {

    try {

      const { data } =
      await API.post(
        "/payment/create-order"
      );

      const options = {

        key:
        "rzp_test_T1AWa2a71fnUbA",

        amount:
        data.amount,

        currency:
        data.currency,

        name:
        "Royal Dine",

        description:
        "Restaurant Reservation Payment",

        order_id:
        data.id,

        handler: function () {

          alert(
            "Payment Successful"
          );

          window.location.href =
          "/payment-success";

        }

      };

      const razorpay =
      new window.Razorpay(
        options
      );

      razorpay.open();

    }

    catch (error) {

      console.log(error);

      alert(
        "Payment Failed"
      );

    }

  };

  return (

    <div className="payment-container">

      <div className="payment-card">

        <h1>
          🍽 Royal Dine
        </h1>

        <p>
          Complete your reservation payment
        </p>

        <div className="amount-box">

          <h2>
            ₹500
          </h2>

        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
        >
          Pay Now
        </button>

        <br />
        <br />

        <button
          className="pay-btn"
          onClick={() =>
            window.location.href =
            "/payment-success"
          }
        >
          Demo Payment Success
        </button>

      </div>

    </div>

  );

}

export default Payment;