import React from "react";
import _ from "lodash";

const Pagination = (props) => {
	const { itemCount, pageSize, currentPage, onPageChange } = props;
	const pagesCount = Math.ceil(itemCount / pageSize);
	console.log(pagesCount);

	if (pagesCount === 1) return null;

	const pages = _.range(1, pagesCount + 1);

	return (
		<div className="pagination">
			{pages.map((page) => {
				return (
					<a
						className={currentPage === page ? "active" : ""}
						href="#cta"
						key={page}
						onClick={() => onPageChange(page)}
					>
						{page}
					</a>
				);
			})}
		</div>
	);
};

export default Pagination;
