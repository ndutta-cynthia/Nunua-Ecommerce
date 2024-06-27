const ProductsCard = ({ title, price, description, category,image, rating }) => {
    return (
      <div>
        <img src={image} alt={`${title} `} />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h4>{category}</h4>
        <h5>{description}</h5>
        {/* <h2>{rating}</h2>  */}
      </div>
    )
  };
  export default ProductsCard;