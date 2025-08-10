import React, {useEffect, useState} from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [nextUrl, setnextUrl] = useState(`${API_URL}?limit=${pageSize}`);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const fetchPokemon = async(url) => {
        try{
            const response = await fetch(url);
            const data = await response.json();

            const pokemonData = data.results.map((poke) => 
                fetch(poke.url).then((res) => res.json())
            );

            const allPokemonData = await Promise.all(pokemonData);
            setPokemon((prevState) => [...prevState, ...allPokemonData]);
            
        }catch(error){
         console.error(error.message);
        }finally{ 
        }
    };

  useEffect(() => {
    fetchPokemon(`${API_URL}?limit=${pageSize}`);
  }, [pageSize]);  

  const handleLoadMore = () =>{
    setPageSize((prevSize) => prevSize + 15);
  };

  const filteredPokemon = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return ( 
  <div className="box">
    <input type="text" 
    placeholder="Search Pokemon"
    value={searchQuery} 
    onChange={(e) => setSearchQuery(e.target.value)} 
    />
    <div className="pokemon-list">
        {filteredPokemon.map((poke, _idx) => {
            return (<PokemonCard
                key={_idx}
                name={poke.name} 
                image={poke.sprites.front_default}
            />
            );

        })}
        </div>
        <button className="loadmore-button" onClick={handleLoadMore}>Load More</button>
    </div>
  )
}

export default PokemonList
