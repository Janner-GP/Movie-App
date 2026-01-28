import { paginator, btnSearch, wordToSearch, selectGender } from "./elements.js";
import { state } from "./state.js";
import { getAllMovies, getAllMoviesByTitle, getAllMoviesByGenre } from "../services/movie-service.js";

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

}
