import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { selectCartItems } from "../../store/cart/cart.selector";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { id, name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToCart = () => dispatch(addItemToCart(product));

	return (
		<div className="product-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-footer">
				<div>
					<h2
						style={{ fontSize: "20px", cursor: "pointer", width: "100%" }}
						onClick={() => navigate(`/shop/product/${id}`)}>
						{name}
					</h2>
					<div className="underline"></div>
				</div>

				<p>{price}</p>
			</div>
			<Button buttonType="inverted" onClick={handleAddToCart}>
				ADD TO CART
			</Button>
		</div>
	);
};

export default ProductCard;
