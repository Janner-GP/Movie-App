import { renderPaginator, renderGenre } from "./render.js"
import { getAllMovies, getAllGenres } from "../services/movie-service.js";
import { setupListeners } from "./listeners.js";
import { state } from "./state.js";

async function main() {
    setupListeners();
    await getAllGenres();
    await getAllMovies();
    renderPaginator(state.totalPages);
    renderGenre(state.genres)
}

main()