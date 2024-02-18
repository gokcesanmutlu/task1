


const ProductCard = ({ product, showModal, setShowModal }) => {

  const handleClick = (e) => {
    console.log(e)
setShowModal(!showModal)
console.log(showModal)
  }

  return (
    <div className=" p-4"  onClick={() => onProductClick(product)}>
      <div className="card w-[175px]" onClick={handleClick}>
        <div className="">
          <div className="img"><img style={{ width: "173px", height: "154px" }} src={product.img} alt="" /></div>
          <div className="flex gap-3 items-center justify-center">
            <h1>{product.name}</h1>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard