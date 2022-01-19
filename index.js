

document.querySelector("form").addEventListener("submit", addMovie);

const message = document.querySelector("#message")

//start of addMovie function

function addMovie(event){
    
    event.preventDefault();

    let inputField = document.querySelector('input')

    let movie = document.createElement('li')

    let movieTitle = document.createElement("span");

    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    let list = document.querySelector("ul");
    list.appendChild(movie);

    inputField.value = ''
}

//end of addMovie function - start deleteMovieFunction

function deleteMovie(event){
    message.textContent = 'Movie Deleted!'

    event.target.parentNode.remove();
    }

    //end of deleteMovie function - Start crossOffMovie function

function crossOffMovie(event) {
    
    event.target.classList.toggle('.checked')

        if (event.target.classList.contains('checked') === true){
            message.textContent = 'Movie Watched!'
        } else {
            message.textContent= "Movie added back!"
        }

    }