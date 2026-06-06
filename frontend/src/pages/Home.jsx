import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const restaurants = [
    {
      id: 1,
      name: "Royal Palace",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      cuisine: "Indian Cuisine"
    },
    {
      id: 2,
      name: "Italian Delight",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      cuisine: "Italian Cuisine"
    },
    {
      id: 3,
      name: "Ocean Breeze",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      cuisine: "Seafood"
    }
  ];

  return (
    <>
      <Navbar />

      <div>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="overlay">
            <h1>
              Reserve Your Perfect Dining Experience
            </h1>

            <p>
              Discover top restaurants and book your
              table instantly.
            </p>

            <button>
              Explore Restaurants
            </button>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="stats">
          <div>
            <h2>50+</h2>
            <p>Restaurants</p>
          </div>

          <div>
            <h2>10K+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Reservations</p>
          </div>
        </section>

        {/* RESTAURANTS */}
        <section className="restaurants">
          <h2>Featured Restaurants</h2>

          <div className="cards">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="card"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                />

                <div className="card-content">
                  <h3>{restaurant.name}</h3>

                  <p>{restaurant.cuisine}</p>

                  <Link to="/menu">
                    <button>
                      View Menu
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;