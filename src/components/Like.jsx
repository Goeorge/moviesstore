import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

class Like extends Component {
	state = {};
	render() {
		let { liked, onClick } = this.props;

		if (!liked) return <AiOutlineHeart className="pointer" onClick={onClick} />;

		return <AiFillHeart className="pointer" onClick={onClick} />;
	}
}

export default Like;
