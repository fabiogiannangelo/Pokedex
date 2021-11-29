const pokedex = document.getElementById("pokedex");

/*
const pokemonsNumber = 150

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonsNumber; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = 'https://pokeapi.co/api/v2/pokemon/${id}';
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon)
}

fetchPokemons();
*/
/*

function fetchPokemon(id) {
    fetch('https://pokeapi.co/api/v2/pokemon/${id}/')
    .then((response) => response.json())
    .then((data) => console.log(data));

}

function fetchPokemon(number) {
    for (let i=1; i <= number; i++) {
        fetchPokemon(i)
    }
}
fetch Pokemon(150)

const pokemon = results.map((result) => ({
    name: result.name,
    image: result.sprites['front_default'],
    type: result.types.map((type) => type.type.name).join(', '),
    id: result.id

*/

const arrayPokemons = [];
const getpokemons = () => {
    for (let index = 1; index <= 150; index++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((datos) => {
            arrayPokemons.push(datos)
           // console.log(arrayPokemons)

        


           const mapPokemon = arrayPokemons.map((poke) => ({
            name : poke.name, 
            photo : poke.sprites.front_default,
            id : poke.id,
            types : poke.types.map((datos) => datos.type.name).join(' '+ ' '),
            }));
        
            console.log(mapPokemon);
            pintaPoke(mapPokemon)
    });
    }
}


const pintaPoke = (personajes) => {
    const accesoHtml = personajes.map((poke) => `<li class="card">
    <img src="${poke.photo}"/>
    <h2> ${poke.name}</h2>
    <h3> ${poke.id}</h3>
    <h4> ${poke.types}</h4>  
    </li>`).join("")
    pokedex.innerHTML = accesoHtml
}

getpokemons();



/*
const mapPokemon = listPokemon.map((poke) => ({
name : poke.name,
photo : poke.sprites.front_default,
id : poke.id,
types : poke.types.map((datos) => datos.type.name).join(', '),
}))
*/