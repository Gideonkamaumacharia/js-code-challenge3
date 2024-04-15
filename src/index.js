let baseUrl = 'http://localhost:3000/films'
let ul = document.getElementById("films")


let li = document.createElement('li')
let remainingTickets = films.capacity - films.tickets_sold


function grabMovie(){
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        for(values of data){
            addMovie(values)
        }
    })

}
grabMovie()

function addMovie(movies){
    movieTitle = films.title
    movieId = films.id

    if(!remainingTickets > 0){
        li.className = 'sold-out'
    }
}