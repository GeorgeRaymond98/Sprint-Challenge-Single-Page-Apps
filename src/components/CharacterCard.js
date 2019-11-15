import React from "react";

export default function CharacterCard({name, image}) {
  return (
    <div>
      <h2>Name:{name}</h2>
      <img src={image} alt="images"/>
    </div>
  )
}
