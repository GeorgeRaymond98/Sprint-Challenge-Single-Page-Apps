import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${filter}`)
      .then(res => {
        console.log(res);
        const characters = res.data.results;
        setData(characters);
      })
      .catch(err => {
        console.log('No data return', err);
      })
  }, [filter]);

const handleChange = (event) => {
event.preventDefault();
setFilter(event.target.value);
}

const handleSub = (event) => {
event.preventDefault();
};

  return (
    <section className="character-list">
      <h2>Welcome</h2>
      <SearchForm
        placeholder='Enter Name Here'
        value={filter}
        handleChange={handleChange}
        handleSubmit={handleSub}
      />
      {data.map(char => (
        <CharacterCard
          key={char.id}
          name={char.name}
          image={char.image}
          species={char.species}
          status={char.status}
        />
      ))}
    </section>
  );
}