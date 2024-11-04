import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(r => r.json())
      .then(data => setPets(data))
  },[])

  function changeType(type) {
    setFilters(type)
  }

  function findPets() {
    fetch(`http://localhost:3001/pets/${filters === 'all' ? '' : `?type=${filters}`}`)
      .then(r => r.json())
      .then(data => setPets(data))
  }

  function adoptPet(id) {
    setPets(pets.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
      return pet
      }
    }))
  }

  console.log(pets)

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={changeType} onFindPetsClick={findPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={adoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;