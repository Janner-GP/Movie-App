const url = "http://localhost:3000"

export async function saveFavoriteMovie(movie) {

    const existing = await getFavoriteMovieById(movie.id)

    if (existing) {
        alert("Ya existe la pelicula")
    }

    const apiUrl = `${url}/movies`
    const body = {
            id: parseInt(movie.id),
            name: movie.title,
            bg_image: movie.poster_path
        }

    const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(`No se ha podido agregar a favoritos la pelicula: ${movie.title}`)
    }

    const data = await response.json()
    return data;
}

export async function getFavoriteMovieById(movieId) {
    try {
        const apiUrl = `${url}/movies/${movieId}`

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`No se ha podido agregar a favoritos la pelicula: ${movie.title}`)
        }

        const data = await response.json()
        return data ? true: false ;
    } catch (error) {
        return false;
    }
}

export async function deleteFavoriteMovie(movieId) {

    const apiUrl = `${url}/movies/${movieId}`

    const response = await fetch(apiUrl, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error(`No se ha podido agregar a favoritos la pelicula: ${movie.title}`)
    }

    const data = await response.json()
    return data;
}