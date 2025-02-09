import React, { useEffect, useState } from "react";
import "./search.styles.scss";
import { useSelector } from "react-redux";
import { selectItemList } from "../../store/itemList/item-list.selector";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const navigate = useNavigate();
	const [revisedItemList, setRevisedItemList] = useState([]);
	const [filteredList, setFilteredList] = useState([]);
	const [listDisplay, setListDisplay] = useState(true);
	const [search, setSearch] = useState("");
	const itemList = useSelector(selectItemList);

	useEffect(() => {
		const revisedList = [];
		itemList.forEach((arr) =>
			arr.items.forEach((item) => revisedList.push(item))
		);
		setRevisedItemList(revisedList);
	}, [, itemList]);

	useEffect(() => {
		search ? setListDisplay(true) : setListDisplay(false);
		const filter = revisedItemList.filter((item) => item.name.includes(search));
		setFilteredList([...filter]);
	}, [search]);

	const handleSearch = (e) => setSearch(e.target.value);
	const handleNavigate = async (id) => {
		await navigate(`/shop`);
		setSearch("");
		setListDisplay(false);
		navigate(`/shop/product/${id}`);
	};

	return (
		<div>
			<input
				type="text"
				className="search"
				placeholder="Search..."
				onChange={handleSearch}
				value={search}
			/>
			{listDisplay && (
				<div className="list-items-container">
					{filteredList.map((item) => (
						<div className="list-item" onClick={() => handleNavigate(item.id)}>
							<div
								className="list-img"
								style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
							<span>{item.name}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
