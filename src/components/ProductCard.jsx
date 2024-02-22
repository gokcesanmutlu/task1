import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, openModal }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className=" p-4">
      <div className="card w-[175px]">
        <div className="flex flex-column">
          <div className="img">
            <img style={{ width: "173px", height: "154px" }} src={product.img} alt="" />
          </div>
          <div className="flex gap-3 items-center justify-center">
            <h2>{t("products." + product.id + ".name")}</h2>
            <p>{t("price")}: {product.price}</p>
          </div>
          <button onClick={() => openModal(product.id)} className="btn btn-success btn-sm">{t("forMore")}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;