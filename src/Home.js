import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/BEST-DOCUMENTARIES-PRIME-VIDEO.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5"
          alt=""
        />

        <div className="home__row">
          <Product
            id="0"
            title="The lean Start Up"
            price={29.99}
            image="https://iluisdaniel.com/wp-content/uploads/2018/10/the-lean-startup.jpg"
            rating={5}
          />

          <Product
            id="1"
            title="Redmi Note 11T 5G"
            price={55}
            image="https://i.gadgets360cdn.com/products/large/redmi-note-11t-5g-824x800-1638256477.jpg?downsize=*:180"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2"
            title="Off Shoulder Classic Long Formal Dress"
            price={49}
            image="https://img.simplydresses.com/_img/SDPRODUCTS/2160693/320/burgundy-dress-KL-200016-d.jpg"
            rating={4}
          />

          <Product
            id="3"
            title="Cookware Combo"
            price={15}
            image="https://m.media-amazon.com/images/I/71Gqv72TcvS._SX679_.jpg"
            rating={3}
          />

          <Product
            id="4"
            title="Men's Shoes"
            price={20}
            image="https://m.media-amazon.com/images/I/619sgmG75gL._UX535_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Home Deccor"
            price={25}
            image="https://m.media-amazon.com/images/I/61q73U+W3SL._SX522_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
