document.addEventListener("DOMContentLoaded", () => {
    grabdata("test");
});

let grabdata = (url) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(err => console.log(err));
}