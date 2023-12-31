import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [onChange, setOnChange] = useState(false);
    const nav = useNavigate();

    const [products, setProducts] = useState();
    const [reviews, setReviews ] = useState()
  
    // Deleting a book from the database
    const deleteBook = (id) => {
      fetch(`/books/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((response) => {
          setOnChange(!onChange);
          console.log(response);
          nav('/');
          Swal.fire('Success', 'Deleted', 'success');
        });
    };
  
    // Adding a user
    const AddUser = (name, password, email, id) => {
      fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password, email, id }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            Swal.fire('Error', response.error, 'error');
            nav("/")
          } else if (response.success) {
            Swal.fire('Success', response.success, 'success');
            setOnChange(!onChange);
            nav("/")
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }
          console.log(response);
        });
    };
  
    // Adding a book
    const AddProduct = (name, price, description, image current_user) => {
      fetch('http://127.0.0.1:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price,description, image, current_user }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            Swal.fire('Error', response.error, 'error');
          } else if (response.success) {
            Swal.fire('Success', response.success, 'success');
            setOnChange(!onChange);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }
          console.log(response);
        });
    };
  
    // Fetching products
    useEffect(() => {
      fetch('http://127.0.0.1:3000/products', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((response) => {
          setProducts(response);
        });
    }, []);
    // fetch reviews
    useEffect(() => {
      fetch('http://127.0.0.1:3000/reviews', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((response) => {
          setReviews(response); // Use setReviews to store the fetched reviews
          console.log(response);
        });
    }, []);
    
  
  
  
    const contextData = {
      products,
      reviews,
     
      AddUser,
    };
  
    return (
      <PostContext.Provider value={contextData}>
        {children}
      </PostContext.Provider>
    );
  }
  