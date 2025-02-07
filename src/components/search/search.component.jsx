import React, { useEffect, useState } from "react";
import "./search.styles.scss";
import { useSelector } from "react-redux";
import { selectItemList } from "../../store/itemList/item-list.selector";

const Search = () => {
	const [revisedItemList, setRevisedItemList] = useState([]);
	const [filteredList, setFilteredList] = useState([]);
	const [listDispaly, setListDisplay] = useState(true);
	const [search, setSearch] = useState("");
	const itemList = useSelector(selectItemList);
	useEffect(() => {
		const revisedList = [];
		itemList.forEach((arr) =>
			arr.items.forEach((item) => revisedList.push(item))
		);
		setRevisedItemList(revisedList);
	}, []);

	const handleSearch = (e) => {
		console.log(itemList);

		console.log(revisedItemList);

		setSearch(e.target.value);
		setListDisplay(search.length <= 0 ? false : true);
		const filter = revisedItemList.filter((item) => item.name.includes(search));
		setFilteredList([...filter]);
		console.log(filteredList);
	};

	return (
		<div>
			<input
				type="text"
				className="search"
				placeholder="Search..."
				onChange={handleSearch}
			/>
			{listDispaly && (
				<div className="list-items-container">
					{filteredList.map((item) => (
						<div className="list-item">{item.name}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
