import mee from "../images/mee.png";
import {  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import martoh from "../images/martoh.jpeg";
export default function Home() {
  const { products } = useContext(PostContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className=" container">
        <div className="landing row">
          <div className="col d-flex justify-content-center align-items-center">
            <div>
              <h2 > Shop with US </h2>
              <p>
                {" "}
                At our online store, we offer a wide range of products to meet your needs. Whether you're searching for books, electronics, clothing, home decor, or more, we've got you covered. Our carefully curated collection ensures that you'll find high-quality items from trusted brands., <br /> Shopping with us is a breeze. Simply browse through our categories, explore the latest arrivals, or take advantage of our special offers. Each product page provides detailed descriptions, customer reviews, and captivating images, allowing you to make informed purchasing decisions. 
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <img src={mee} className="" alt="" />
          </div>
        </div>
      </div>

      <h1 className="text-center">ONE-STOP-SHOP</h1>
      <div className="container-fluid row justify-content-center">
        {products &&
          products.map((product) => (
            <div className="col-6 col-sm-6 col-md-4 mb-5">
              <div className="card shadow">
                <div
                  className="overflow-hidden"
                  style={{ height: "40vh", width: "18rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top img-fluid"
                    alt="img loading..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <button
  onClick={() => navigate(`/product/${product.id}`)}
  className="btn btn-success btn-sm w-70"
>
 View Product
</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      
    </div>
    );
}

