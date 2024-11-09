function ProductCard({ img1x, img2x, name, desc, rating, reviews, price }) {
  return (
    <li className="ProductCard">
      <div className="ProductCard-topSection">
        <picture className="ProductCard-imgContainer">
          <source srcSet={`${img1x} 1x, ${img2x} 2x`} />
          <img className="ProductCard-img" src={`${img1x}`} width="274" height="274" alt={name} loading="lazy" />
        </picture>
        <h2 className="ProductCard-title">
          <a href="#" className="Link Link--inverted Link--stretched" title={name}>
            {name}
          </a>
        </h2>
        <p className="ProductCard-desc">{desc}</p>
      </div>
      <div className="ProductCard-bottomSection">
        <div className="ProductCard-ratingSection">
          <div className="ProductCard-rating">
            <span className="ProductCard-ratingStars" style={{ width: rating * 20 + "%" }}></span>
          </div>
          <span className="ProductCard-ratingValue">{rating}</span>
        </div>
        <a href="#" className="ProductCard-reviews" title={`Show product ${reviews > 1 ? "reviews" : "review"}`}>
          {reviews} {reviews > 1 ? "reviews" : "review"}
        </a>
        <span className="ProductCard-price">{price}</span>
        <button type="button" className="Button u-width-100p">
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
