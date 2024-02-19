import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Modal = ({ detailId, closeModal, addToBasket, basket, setBasket }) => {
  const [specific, setSpecific] = useState()
  console.log(addToBasket)

  useEffect(() => {
    const getSpecificProduct = async () => {
      try {
        const response = await axios.get(`./db.json?id=${detailId}`);
        setSpecific(response.data.products.find(product => product.id === detailId));
      } catch (error) {
        console.error('Error getting specific product:', error);
      }
    };

    getSpecificProduct();
  }, [detailId]);

  console.log(specific)
  console.log(basket)

  return (
    <div className="card p-8" >
      <button onClick={closeModal} className="dismiss" type="button">×</button>
      <div className="product">
        <img style={{ width: "300px", height: "220px" }} src={specific ? specific.img : "logoo.jpg"} alt="" />
        <div className="flex flex-column gap-2 p-2 text-justify items-center font-mono font-md">
          <h4 className='font-semibold'>{specific ? specific.name : "Choose your favorite one !"}</h4>
          <p>{specific ? specific.description : "with Best Quality"}</p>
          <p>{specific ? "$ " + specific.price : "with Best Price"}</p>
        </div>
        <div className="actions">
          <button onClick={()=>addToBasket(specific)} className="history" type="button">Add to Basket</button>
          <button className="track" type="button">Follow the Price</button>
        </div>
      </div>
    </div>
  )
}

export default Modal