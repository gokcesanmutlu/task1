import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Modal = ({ detailId, closeModal }) => {
  const [specific, setSpecific] = useState()

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
  return (
    <div className="card p-8" >
     <button onClick={closeModal} className="dismiss" type="button">×</button>
      <div className="product">
        <img style={{ width: "300px", height:"220px" }} src={specific.img} alt="" />
        <div className="flex flex-column gap-2 p-2 text-justify items-center">
        <h4>{specific.name}</h4>
        <p>{specific.description}</p>
        <p>${specific.price}</p>
        </div>
        <div className="actions">
          <button  className="history" type="button">Add to Basket</button>
          <button className="track" type="button">Follow the Price</button>
        </div>
      </div>
    </div>
  )
}

export default Modal