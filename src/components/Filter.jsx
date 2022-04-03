import React from "react";

const Filter = (props) => {
	const { genres, textProperty, valueProperty, selectedGenre, onItemSelect } =
		props;
	return (
		<div className="filter">
			{genres.map((genre) => {
				return (
					<a
						href="#cta"
						key={genre[valueProperty]}
						className={selectedGenre === genre ? "active" : ""}
						onClick={() => onItemSelect(genre)}
					>
						{genre[textProperty]}
					</a>
				);
			})}
		</div>
	);
};

Filter.defaultProps = {
	textProperty: "name",
	valueProperty: "_id",
};

export default Filter;
