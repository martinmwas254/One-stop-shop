import { useContext, useState } from "react";
import book from "../images/book.jpg";
import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";

export default function AddProduct() {
  const { current_user } = useContext(AuthContext);
  const { AddProduct } = useContext(PostContext)

  const [name, setName]  = useState()
  const [image, setImage]  = useState()
  const [description, setDescription]  = useState()
  const [price, setPrice]  = useState()
 
  

  

  function handleSubmit(e){
    e.preventDefault()

    console.log(name, description);

    AddProduct(name, description, image, price, current_user.id)


}

  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      {current_user ? (
        <>
          <h3>Add Book Review</h3>
          <div className="row h-full">
            <div className="col-md-6">
              <img src={book} className="img-fluid" alt="Edit" />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="exampleInputEmailm1">Author</label>
                  <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="exampleInputEmail1">Image_url</label>
                  <input
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    className="form-control"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                </div>
               
                <div className="form-group mt-3">
                  <label htmlFor="exampleInputEmail1">Review</label>
                  <textarea
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    aria-describedby="emailHelp"
                    placeholder="Enter Description"
                  ></textarea>
                </div>

                <button type="submit" className="btn mt-3 btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div>"Login in order to add your book review"</div>
      )}
    </div>
  );
}
