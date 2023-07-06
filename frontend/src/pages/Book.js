import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

export default function Book() {
  const { id } = useParams();
  const { products, deleteproduct } = useContext(PostContext);
  const [singleProduct, setSingleProduct] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const product =products && products.find((product) => product.id === parseInt(id));

    if (product) {
      setSingleProduct(product);
      setReviews(reviews); // Set the reviews state with the reviews associated with the book
    }
  }, [products, id]);

  const handleDelete = () => {
    deleteproduct(singleProduct.id);
  };

  return (
    <div className='container mx-auto'>
      <h4>{singleProduct.name}</h4>
      <div className='row gx-5'>
        <div className='col-lg-8 bg-light'>
          <img src={singleProduct.image} className='img-fluid' alt='image' />
          <div className='d-flex mt-4 gap-5'>
            <p>Author: {singleProduct.author}</p>
            
            <button className='btn btn-danger btn-sm' onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card p-2'>
            <h5 className='fw-thin mt-5'>Review</h5>
            {reviews.map((review) => (
              <div key={review.id}>
                <h6>{review.book.title}</h6>
                <p>{review.content}</p>
              </div>
            ))}
            <form className='mt-5'>
              <h6>Subscribe</h6>
              <div className='form-group my-4'>
              <button className='btn btn-success btn-sm'>Edit</button>
              </div>
              <button type='submit' className='btn btn-success w-100'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
