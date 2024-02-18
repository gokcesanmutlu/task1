import axios from 'axios';
import React from 'react'

const Modal = ({ product, closeModal}) => {
  // axios.get(`./db.json?id=${product.id}`)
  //   .then(response => console.log(response))
  //   .catch(error => console.error('Error:', error));

  return (
    <div className="card p-8" >
      <button onClick={()=>closeModal()} className="dismiss" type="button">×</button>
      <div className="product">
        <img style={{ width: "300px" }} src="ürün2.jpg" alt="" />
        <h4>Product Name</h4>
        <p>Product detail Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        <p>Menşei ülke</p>
        <p>Price</p>
        <div className="actions">
          <button className="history" type="button">Add to Basket</button>
          <button className="track" type="button">Follow the Price</button>
        </div>
      </div>
    </div>
  )
}

export default Modal