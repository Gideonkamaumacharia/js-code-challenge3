document.addEventListener("DOMContentLoaded",()=>{
    // Your code here


    function handleBuyMovie(e){
        e.preventDefault()
        let movieObj = {
           id: e.target.id.value,
           title:e.target.title.value,
           runtime:e.target.runtime.value,
           capacity:e.target.capacity.value,
           showtime:e.target.showtime.value,
           tickets:e.target.tickets_sold.value,
           description:e.target.description.value,
           poster:e.target.poster.value
        }
        renderMovie(movieObj)
        buyMovie(movieObj)
    }

    //DOM render fuunctions
    function renderMovie(movie) {
        // Select the existing <li> element with class "form item"
        const li = document.querySelector(".film.item")
        
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
            return renderMovie(movie)}))
    }

    function buyMovie(){
        fetch("http://localhost:3000/films",{
            method: "POST",
            headers:{
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body:JSON.stringify(movieObj)
           
        })
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