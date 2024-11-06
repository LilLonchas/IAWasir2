import React, { useState } from 'react';
import heroes from './heroes.json'; // Asegúrate de tener el archivo JSON en la misma carpeta
import "./paginaWeb/select.module.css"
function SuperheroSelect() {
  const [selectedHero, setSelectedHero] = useState(""); // Estado para el héroe seleccionado

  // Filtramos los héroes para obtener solo los de Marvel
  const marvelHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics");

  const handleChange = (event) => {
    setSelectedHero(event.target.value); // Actualiza el estado cuando el usuario cambia la selección
  };

  return (
    <div>
      <h1 >Seleccione un Superhéroe de Marvel</h1>
      <select value={selectedHero} onChange={handleChange}>
        <option value="">Seleccione un superhéroe</option>
        {/* Mapea solo los héroes de Marvel para crear las opciones en el select */}
        {marvelHeroes.map(hero => (
          <option key={hero.superhero} value={hero.superhero}>
            {hero.superhero} ({hero.publisher})
          </option>
        ))}
      </select>

      {/* Mostrar detalles del héroe seleccionado */}
      {selectedHero && (
        <div>
          <h2>Detalles del Superhéroe</h2>
          <p><strong>Superhéroe:</strong> {selectedHero}</p>
          {/* Buscar el héroe seleccionado para mostrar más detalles */}
          {marvelHeroes
            .filter(hero => hero.superhero === selectedHero)
            .map(hero => (
              <div key={hero.superhero}>
                <p><strong>Alter Ego:</strong> {hero.alter_ego}</p>
                <p><strong>Primera Aparición:</strong> {hero.first_appearance}</p>
                <p><strong>Personajes:</strong> {hero.characters}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SuperheroSelect;
