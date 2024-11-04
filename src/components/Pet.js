import React, { useState } from "react";

function Pet({pet, onAdoptPet}) {

  const { id, age, gender, name, type, weight, isAdopted } = pet

  function handleAdoptClick() {
    if (!isAdopted) {
      onAdoptPet(id)
    }
  }


  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'female' ? '♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={isAdopted ? "ui disabled button" : "ui primary button"} onClick={handleAdoptClick} >{isAdopted ? 'Already adopted' : 'Adopt pet'}</button>
      </div>
    </div>
  );
}

export default Pet;