import React from "react";

export default function CharacterCard({name, species, status , image}) {
  return (
    <div className="char-card">
      <h1>Name:{name}</h1>
      <img src={image} alt="images"/>
      <h3>Species:{species}</h3>
      <h2>Status:{status}</h2>
    </div>
  )
}
