const searchParams = new URLSearchParams(location.search);
const id = Object.fromEntries(searchParams).id;

const buildPage = (piatto) => {
    const title = document.getElementById('title');
    title.innerText = piatto.title;

    const ingredienti = document.getElementById('ingredienti');
    
    for(let ingredient of piatto.ingredients) {
        const liElement = document.createElement('li');
        liElement.innerHTML = ingredient;
        ingredienti.appendChild(liElement);
    }
}

fetch(`https://my-json-server.typicode.com/michelefenu/tnv-academy-VIII/piatti/${id}`)
  .then((res) => res.json())
  .then((res) => buildPage(res));