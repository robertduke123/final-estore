import React, { useEffect, useState } from "react";
import "./product-page.style.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectItemList } from "../../store/itemList/item-list.selector";
import Button from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const itemList = useSelector(selectItemList);
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const { name, price, imageUrl, description } = product;
	useEffect(() => {
		itemList.forEach((list) => {
			list.items.forEach((item) => {
				item.id === Number(id) && setProduct(item);
			});
		});
	}, [, itemList, id]);

	const handleAddToCart = () => {
		for (let i = 0; i < quantity; i++) {
			dispatch(addItemToCart(product));
		}
	};
	const handleQuantity = (sign) =>
		sign === "positive"
			? setQuantity((quantity) => quantity + 1)
			: quantity !== 1 && setQuantity((quantity) => quantity - 1);

	return (
		<div className="product-page-container">
			<img src={imageUrl} alt={name} />
			<div className="product-page-info">
				<h2>{name}</h2>
				<p>{description}</p>
				<div className="page-info-footer">
					<div className="product-quantity">
						<p>{`$${price}`}</p>
						<div
							style={{
								display: "flex",
								width: "50px",
								justifyContent: "space-between",
							}}>
							<div
								style={{
									cursor: "pointer",
									WebkitUserSelect: "none",
									msUserSelect: "none",
									userSelect: "none",
								}}
								onClick={() => handleQuantity("negative")}>
								&#10094;
							</div>
							<div>{quantity}</div>
							<div
								style={{
									cursor: "pointer",
									WebkitUserSelect: "none",
									msUserSelect: "none",
									userSelect: "none",
								}}
								onClick={() => handleQuantity("positive")}>
								&#10095;
							</div>
						</div>
					</div>
					<Button onClick={handleAddToCart}>ADD TO Cart</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
