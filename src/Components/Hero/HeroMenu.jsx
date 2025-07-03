import React, { useState } from 'react';
import './HeroMenu.css';

// Import your images (replace with actual paths)
import burgerImg from '../Assets/classicBurger.jpg';
import pizzaImg from '../Assets/classicBurger.jpg';
import friesImg from '../Assets/classicBurger.jpg';
import dosaImg from '../Assets/classicBurger.jpg';
import cheeseburgerImg from '../Assets/classicBurger.jpg';
import baconburgerImg from '../Assets/classicBurger.jpg';

const HeroMenu = () => {
  const allMenuItems = [
    {
      id: 1,
      name: "Classic Burger",
      category: "Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce.",
      price: 9.99,
      image: burgerImg
    },
    {
      id: 2,
      name: "Cheeseburger",
      category: "Burger",
      description: "Our classic burger with American cheese.",
      price: 10.99,
      image: cheeseburgerImg
    },
    {
      id: 3,
      name: "Bacon Burger",
      category: "Burger",
      description: "Classic burger with crispy bacon strips.",
      price: 12.99,
      image: baconburgerImg
    },
    {
      id: 4,
      name: "Margherita Pizza",
      category: "Pizza",
      description: "Classic pizza with tomato sauce and mozzarella.",
      price: 14.99,
      image: pizzaImg
    },
    {
      id: 5,
      name: "French Fries",
      category: "Fries",
      description: "Crispy golden fries with sea salt.",
      price: 4.99,
      image: friesImg
    },
    {
      id: 6,
      name: "Vanilla",
      category: "Ice-cream",
      description: "Sweet, creamy frozen dessert made primarily from milk, cream, sugar, and vanilla flavoring.",
      price: 11.99,
      image: dosaImg
    }
  ];

  const categories = ["All", "Burger", "Pizza", "Fries", "Ice-cream"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedItems, setDisplayedItems] = useState(allMenuItems);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    setDisplayedItems(
      category === "All" 
        ? allMenuItems 
        : allMenuItems.filter(item => item.category === category)
    );
  };

  return (
    <section className="hero-menu">
      <div className="menu-container">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {displayedItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-desc">{item.description}</p>
                <div className="item-footer">
                  <span className="price">${item.price.toFixed(2)}</span>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroMenu;