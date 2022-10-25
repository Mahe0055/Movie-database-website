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
        document.body.appendChild(h3);

//Exercise 4 - level 2
        const ul = document.querySelector("ul")
        ul.innerHTML = JSON.stringify(movies);
        document.body.appendChild(ul);
});