import { renderMovies, renderPaginator } from "../js/render.js"
import { state } from "../js/state.js"

const url = 'https://api.themoviedb.org/3'
const token = 'tu_token'

const headers = {
    "Authorization": `Bearer ${token}`
}

export async function getAllMovies(page = 1) {
    state.isLoading = true
    renderMovies(state.movies)

    try {
        const newURl = `${url}/discover/movie?page=${page}`
        const response = await fetch(newURl, { headers })

        if (!response.ok) {
            throw new Error("Error al consultar las peliculas")
        }

        const data = await response.json()
        state.movies = data.results
        state.totalPages = data.total_pages

    } catch (error) {
        console.error(error)

    } finally {
        state.isLoading = false
        renderMovies(state.movies)
        renderPaginator(state.totalPages)
    }
}


export async function getAllMoviesByTitle(title, page = 1) {
    state.isLoading = true
    renderMovies(state.movies)

    try {
        const newURl = `${url}/search/movie?query=${title}&page=${page}`
        const response = await fetch(newURl, { headers })

        if (!response.ok) {
            throw new Error("Error al consultar las peliculas")
        }

        const data = await response.json()
        state.movies = data.results
        state.totalPages = data.total_pages

    } catch (error) {
        console.error(error)

    } finally {
        state.isLoading = false
        renderMovies(state.movies)
    }
}


export async function getAllMoviesByGenre(genre, page = 1) {

    const newURl = `${url}/discover/movie?with_genres=${genre}&page=${page}`

    const response = await fetch(newURl, { headers })

    if (!response.ok) {
        throw new Error("Error al consultar las peliculas por genero")
    }

    const data = await response.json();
    state.movies = data.results;
    state.totalPages = data.total_pages;
    renderMovies(state.movies)

}

export async function getAllGenres() {

    const newURl = `${url}/genre/movie/list?language=es`

    const response = await fetch(newURl, { headers })

    if (!response.ok) {
        throw new Error("Error al consultar los generos")
    }

    const data = await response.json();
    state.genres = data.genres;
    renderMovies(state.movies)

}