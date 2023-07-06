import mee from "../images/mee.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

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
                A room without a book , <br /> is like a body without a soul
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <img src={mee} className="" alt="image loading..." />
          </div>
        </div>
      </div>

      <h1 className="text-center">Books Reviews</h1>
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
  Read Review
</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
