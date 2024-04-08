// Your code here
//store url in a variable
let url = "http://localhost:3000/films/";
//grab the ul element
let ulFilms = document.getElementById("films");
//grab the Buy Ticket button
let idBuyticket = document.getElementById("buy-ticket")
//grab img
let movieImg = document.getElementById("poster");
//grab movie title div
let idTitle = document.getElementById("title")
//grab runtime div
let idRuntime = document.getElementById("runtime")
//grab movie description div
let idFilmInfo = document.getElementById("film-info")
//grab showtime div
let idShowtime = document.getElementById("showtime")
//grab the remaining tickets div
let idTicketnum = document.getElementById("ticket-num")

//this function removes the content in the ul by setting it to empty string and then
//the contents are created using addMovie()
function grabMovie(){
    fetch(url)
    .then(res => res.json())
    .then(data => { 
        ulFilms.innerHTML = "";
        for(values of data){
             addMovie(values);
        }
        }
    )
    .catch(e => console.log(e.message));
}
grabMovie();

//adds and deletes movies

function addMovie(movies){
    
    let remaining = movies.capacity - movies.tickets_sold;

    movieTitle = movies.title
    movieId = movies.id
    let liFilm = document.createElement("li");
    if(!remaining > 0)
    {  liFilm.className = "sold-out"
    }

    ulFilms.appendChild(liFilm);

    let movieSpan = document.createElement("span");
    movieSpan.innerText = movieTitle;
    liFilm.appendChild(movieSpan);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete"
    liFilm.appendChild(deleteButton); 

    deleteButton.addEventListener('click', () => {
        deleteMovie(movies)
    })
    movieSpan.addEventListener('click', () => {
        updateDom(movies);
    })
    if(movies.id === "1"){
        updateDom(movies);
    }
}


//updates the DOM
function updateDom(movies){
    let remaining = movies.capacity - movies.tickets_sold;
    let movieId = movies.id;
    let availabiity;

    if(remaining > 0){
        availabiity = "Buy Tickt"
    }else{
        availabiity = "Sold out"
    }

    movieImg.src = movies.poster; 
    movieImg.alt = movies.title; 
    idTitle.innerText = movies.title;
    idRuntime.innerText = movies.runtime + " minutes";
    idFilmInfo.innerText = movies.description;
    idShowtime.innerText = movies.showtime;
    idTicketnum.innerText = remaining;

    idBuyticket.onclick = () => {
        if(remaining > 0)
        { 
             buyTicket(movies)
        }else{
            console.log("You cannot buy tickets")
        }
    };
    idBuyticket.dataset.movieId = movies.id;
    let button = document.querySelector("[data-movie-id='"+movieId+"']");
    button.innerText = availabiity;
}

//build buying tickets
function buyTicket(movies){

    movies.tickets_sold++
    let ticketsSold = movies.tickets_sold;
    let requestHeaders = {
        "Content-Type": "application/json"
    }
    let requestBody = {
        "tickets_sold": ticketsSold
    }
    fetch(url+movies.id,{
        method: "PATCH",
        headers: requestHeaders,    
        body: JSON.stringify(requestBody)
    })
    .then (res => res.json())
    .then (data => {
        updateDom(data);

        let numberOfTickets = (data.capacity - data.tickets_sold)

        if(!numberOfTickets > 0)
        { grabMovie()
        }

        let  RequestBodyTickets =  {
            "film_id": data.id,
            "number_of_tickets": numberOfTickets
         }

        fetch("http://localhost:3000/tickets",{
            method: "POST",
            headers: requestHeaders,    
            body: JSON.stringify(RequestBodyTickets)
        })
        .then (res => res.json())
        .then(data => data)
        .catch (e => console.log(e.message));

    })
    .catch (e => console.log(e.message));
}

//deletes movies
function deleteMovie(movie){
    let requestHeaders = {
        "Content-Type": "application/json"
    }
    let requestBody = {
        "id": movie.id
    }
    fetch(url+movie.id, {
        method: "DELETE",
        headers: requestHeaders,    
        body: JSON.stringify(requestBody)
    })
    .then (res => res.json())
    .then (data => grabMovie())
    .catch (e => console.log(e.message));
}