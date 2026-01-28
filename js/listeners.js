import { paginator, btnSearch, wordToSearch, selectGender, containerMovies } from "./elements.js";
import { state } from "./state.js";
import { getAllMovies, getAllMoviesByTitle, getAllMoviesByGenre } from "../services/movie-service.js";
import { saveFavoriteMovie, deleteFavoriteMovie } from "../services/favorite-movie-service.js";

export function setupListeners() {

    paginator.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            state.actuallyPage = event.target.textContent;
            getAllMovies(state.actuallyPage);
        }
    })

    btnSearch.addEventListener("click", (event) => {
        getAllMoviesByTitle(wordToSearch.value)
    })

    selectGender.addEventListener("change", (event) => {
        getAllMoviesByGenre(event.target.value)
    })

    containerMovies.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            // Obtener la tarea actual en base al ID
            const selectedMovie = state.movies.find(movie => movie.id == event.target.dataset.movieId)
            deleteFavoriteMovie(selectedMovie.id)
        }
    })

}
