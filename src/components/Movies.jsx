import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./Pagination";
import MovieTable from "./MoviesTable";
import { paginate } from "../util/paginate";
import Filter from "./Filter";

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		selectedGenre: [],
	};

	componentDidMount() {
		const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
	}

	handleDelete = (movie) => {
		//get all the movies in the state except the movies we have passed as a parameter using filter method.
		console.log("Deleting A Movie....");
		const movies = this.state.movies.filter((m) => m._id !== movie._id);
		this.setState({ movies: movies });
	};

	handleLike = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleGenreSelect = (genre) => {
		// console.log(genre);
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleSort = (path) => {
		console.log(path);
	};

	render() {
		const { length: count } = this.state.movies;
		const {
			currentPage,
			pageSize,
			selectedGenre,
			movies: allMovies,
		} = this.state;

		if (count === 0) return <p>No Movies in the Database! </p>;

		const filtered =
			selectedGenre && selectedGenre._id
				? allMovies.filter((m) => m.genre._id === selectedGenre._id)
				: allMovies;

		const movies = paginate(filtered, currentPage, pageSize);

		return (
			<div className="container">
				<Filter
					genres={this.state.genres}
					selectedGenre={this.state.selectedGenre}
					onItemSelect={this.handleGenreSelect}
				/>
				<div className="inner-container">
					<p style={{ marginBottom: 15 }}>
						Showing {movies.length} of {count} movies in the Database
					</p>
					<MovieTable
						movies={movies}
						onLike={this.handleLike}
						onDelete={this.handleDelete}
						onSort={this.handleSort}
					/>
					<Pagination
						itemCount={filtered.length}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					/>
				</div>
			</div>
		);
	}
}

export default Movies;
