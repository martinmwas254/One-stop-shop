import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import review from '../images/review.jpg';

export default function Book() {
  const { id } = useParams();
  const { books, deleteBook } = useContext(PostContext);
  const [singleBook, setSingleBook] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const book = books.find((book) => book.id === parseInt(id));

    if (book) {
      setSingleBook(book);
      setReviews(reviews); // Set the reviews state with the reviews associated with the book
    }
  }, [books, id]);

  const handleDelete = () => {
    deleteBook(singleBook.id);
  };

  return (
    <div className='container mx-auto'>
      <h4>{singleBook.title}</h4>
      <div className='row gx-5'>
        <div className='col-lg-8 bg-light'>
          <img src={singleBook.image_url} className='img-fluid' alt='image' />
          <div className='d-flex mt-4 gap-5'>
            <p>Author: {singleBook.author}</p>
            
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
