let baseUrl = 'http://localhost:3000/films'
let ul = document.getElementById("films")


let li = document.createElement('li')


function grabMovie(){
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        for(values of data){
            addMovie(values)
        }
    })

}