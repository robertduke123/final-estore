import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
	return (
		<Fragment>
			<Outlet />
			<div className="footer-container">
				<h2 style={{ color: "red", alignSelf: "flex-start" }}>ECOMMERCE</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
					officia dignissimos. Ut labore consectetur natus, et assumenda eaque
					id dignissimos hic soluta laudantium nam molestiae incidunt? Dolorem
					alias deserunt libero.
				</p>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}>
					<div className="footer-columns">
						<h2>About Us</h2>
						<p>Careers</p>
						<p>Our Stores</p>
						<p>Terms & Conditions</p>
						<p>Privacy Policy</p>
					</div>
					<div className="footer-columns">
						<h2>Customer Care</h2>
						<p>Help Centers</p>
						<p>Track Your Orders</p>
						<p>Corporate & Bulk Purchasing</p>
						<p>Returns & Refunds</p>
					</div>
					<div className="footer-columns">
						<h2>Contact Us</h2>
						<p>50 north Whatever Blvd, Washington, DC 10501</p>
						<p>somethingsomething@gmail.com</p>
						<p>{"(222)333-4444"}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
