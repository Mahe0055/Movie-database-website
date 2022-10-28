//Exercise 1 - level 1 Fetch the movies and log out.
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        console.log(movies);

        //Exercise 2 - level 1 Render string "6527 movies fetched" to HTML.
        const h2 = document.querySelector("h2")
        h2.innerHTML = movies.length+" movies fetched";
        document.body.appendChild(h2);


//Exercise 3 - level 1 Render 1. movie in the movies array.
        const h3 = document.querySelector("h3")
        h3.innerHTML = JSON.stringify(movies[0]);
        h3.innerText = "The movie '71' got released in 2014. The rating is 7.2 by 41702 votes in total. The movie last 5940 seconds.";
        document.body.appendChild(h3);

//Exercise 4 - level 2 Render the movies in a list.
        const listOfMovies = document.querySelector("#list");
        for (let i = 0; i < movies.length; i++){
                const myElement = document.createElement("li");
                let content = movies[i]['title'] + ', ' + movies[i]['year'] + ', ' + movies[i]['rating'] + ', ' + movies[i]['votes'] + ', ' + movies[i]['running_times'];
                myElement.innerHTML = content;
                document.querySelector("#list").appendChild(myElement);
        }

//Exercise 5 - level 2 create button.
        const button = document.querySelector('button');
        button.innerText = "Get newer movies";
        button.addEventListener('click', function() {
                function getNewerMovies(movies, year) {
                const resultOfMovies = ${year} ${movies};
                        return resultOfMovies;
                }
                const yearAndMovies = getNewerMovies([i], ['year'] > 2014);
                console.log(yearAndMovies);
        })
    });





