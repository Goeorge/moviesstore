import * as genreAPI from "./fakeGenreService";

const movies = [
	{
		_id: "5a21ca3eeb7f6fbccd471815",
		title: "Terminator I",
		genre: { _id: "5a21ca3eeb7f6fbccd471818", name: "Action" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
		liked: true,
	},
	{
		_id: "5a21ca3eeb7f6fbccd471816",
		title: "Gods Must be Crazy I",
		genre: { _id: "5a21ca3eeb7f6fbccd471819", name: "Comedy" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
		liked: false,
	},
	{
		_id: "5a21ca3eeb7f6fbccd471817",
		title: "Terminator II",
		genre: { _id: "5a21ca3eeb7f6fbccd471821", name: "Action" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
	},
	{
		_id: "5a21ca3eeb7f6fbccd471818",
		title: "Joker",
		genre: { _id: "5a21ca3eeb7f6fbccd471820", name: "Thriller" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
	},
	{
		_id: "5a21ca3eeb7f6fbccd471820",
		title: "Matrix",
		genre: { _id: "5a21ca3eeb7f6fbccd471818", name: "Action" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
	},
	{
		_id: "5a21ca3eeb7f6fbccd471819",
		title: "The Closer",
		genre: { _id: "5a21ca3eeb7f6fbccd471819", name: "Comedy" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
	},
];

export function getMovies() {
	return movies;
}

export function getMovie(id) {
	return movies.find((m) => m.id === id);
}

export function saveMovie(movie) {}
