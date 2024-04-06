// Your code here

    //DOM render fuunctions
    function movieTitle(movie) {
        // Select the existing <li> element with class "form item"
        const li = document.getElementsByClassName("film item")

         // Set inner HTML with movie details
        li.innerHTML += `
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
        let baseURL = "http://localhost:3000/films"
        fetch(baseURL)
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
        // 
    }
    console.log(initialize())