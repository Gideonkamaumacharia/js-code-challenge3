document.addEventListener("DOMContentLoaded",()=>{
    // Your code here

    //DOM render fuunctions
    function movieTitle(movie) {
        // Select the existing <li> element with class "form item"
        const li = document.querySelector("film.item")
        
        // if(!li){
        //     console.error("Could not find element with class 'film item'");
        // return;
        // }
         // Set inner HTML with movie details
        li.innerHTML = `
        <p>${movie.id }</p>
        <p>${movie.title }</p>
        <p>${movie.runtime}</P>
        <P>${movie.capacity}</P>
        <P>${movie.showtime}</P>
        <P>${movie.tickets_sold}</P>
        <P>${movie.description}</P>
        <P>${movie.poster}</P>
        `;
        console.log(li)

    }


    //fetch requests
    //Get fetch for all users
    function getAllMovies(){
        let baseURL = 
        fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(films =>films.forEach(movie => {
            return movieTitle(movie)}))
    }
    
    // function processFilms(response) {
    //     return response.json()
    //         .then(films => {
    //             films.forEach(movie => {
    //                 movieTitle(movie);
    //             });
    //         });
    // }
     //processFilms()
    

     //initial render
    //Get data and render movies to the DOM
    function initialize(){
        getAllMovies()
        
    }
    initialize()
})