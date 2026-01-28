
import { containerMovies, paginator } from "./elements.js";
import { selectGender } from "./elements.js";
import { state } from "./state.js";

const imageUrl = 'https://image.tmdb.org/t/p/original'

export function renderMovies(movies) {

    // limpiar el contenedor
    containerMovies.innerHTML = "";

    // Si se esta cargando los datos mostrar un loader
    if (state.isLoading) {
        containerMovies.innerHTML = `<p class="text-center col-span-full">Loading...</p>`
        return
    }

    //Recorrer peliculas y agregar dentro de container movies
    movies.forEach(element => {
        const cardMovie = document.createElement("div");
        cardMovie.innerHTML = `<div class="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition  duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <img class="rounded-md max-h-40 w-full object-cover" src="${imageUrl}${element.poster_path}" alt="officeImage">
            <p class="text-gray-900 text-xl font-semibold ml-2 mt-4">
                ${element.title}
            </p>
            <p class="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2 line-clamp-4">
                ${element.overview}
            </p>
            <button type="button" data-movie-id="${element.id}" class="bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm">
                Agregar a Favoritos
            </button>
        </div>`;

        containerMovies.appendChild(cardMovie);
    });

}

export function renderPaginator(numberPages) {
    paginator.innerHTML = ''

    for (let i = 1; i <= numberPages; i++) {

        if (i <= 10 || i === numberPages) {
            paginator.innerHTML += `
                <button
                    type="button"
                    class="page-btn
                           w-12 h-12 rounded-md border
                           ${parseInt(state.actuallyPage) === i
                               ? 'bg-indigo-500 text-white border-indigo-500'
                               : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}">${i}</button>
            `
        }

        if (i === 10 && numberPages > 10) {
            paginator.innerHTML += `<span class="flex items-center justify-center w-9 h-9 text-gray-500 select-none">...</span>`
        }
    }
}

export function renderGenre(genres) {
    genres.forEach(genre => {
        const opcion = document.createElement('option')
        opcion.textContent = genre.name;
        opcion.value = genre.id;
        selectGender.appendChild(opcion)
    })
}
