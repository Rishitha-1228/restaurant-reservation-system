import Navbar from "../components/Navbar";
import "./Menu.css";

function Menu() {
  const restaurants = [
    {
      name: "Royal Palace",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      menu: [
        { item: "Chicken Biryani", price: 299 },
        { item: "Butter Chicken", price: 349 },
        { item: "Paneer Tikka", price: 249 }
      ]
    },

    {
      name: "Italian Delight",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      menu: [
        { item: "Pizza", price: 399 },
        { item: "Pasta", price: 299 },
        { item: "Lasagna", price: 449 }
      ]
    },

    {
      name: "Ocean Breeze",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae",
      menu: [
        { item: "Grilled Fish", price: 599 },
        { item: "Lobster", price: 899 },
        { item: "Prawns", price: 699 }
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <div className="menu-page">
        <h1>Restaurant Menus</h1>

        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="restaurant-menu-card"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
            />

            <h2>{restaurant.name}</h2>

            {restaurant.menu.map((food, i) => (
              <div
                key={i}
                className="food-item"
              >
                <span>{food.item}</span>

                <span>₹{food.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;