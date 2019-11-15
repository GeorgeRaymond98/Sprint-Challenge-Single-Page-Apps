import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const[data, setData] = useState = ([]);
  const[filter, setFilter] = useState = ("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/name=${filter}`).then(response => {
      console.log(response);
      const characters = response.data.results;
      setData(characters);
    }).catch(error => {
      console.log('Try again');
    })

  }, [filter]);

  const handleSub = (event) => {
    event.preventDefault();
    console.log("Giving you " + filter);
  }

  const handleChange = (event)=> {
    event.preventDefault();
    setFilter(event.target.value);
  };



  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <SearchForm
        value={filter}
        placeholder= 'Hold on'
        handleSub = {handleSub}
        handleChange = {handleChange}
      />
      {data.map(char => (
        <CharacterCard
          key={char.id}
          name={char.name}
          image={char.image}
        />
      ))}
    </section>
  );
}
