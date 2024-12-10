import React, { useState } from 'react';
import heroes from './heroes.json'; // Asegúrate de tener el archivo JSON en la misma carpeta
import styles from "./paginaWeb/select.module.css"; // Importa el archivo CSS correctamente

function NoticiaSeleccionada() {
  const [selectedHero, setSelectedHero] = useState(""); // Estado para el héroe seleccionado

  // Filtramos los héroes para obtener solo los de Marvel
  const marvelHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics");

  const handleChange = (event) => {
    setSelectedHero(event.target.value); // Actualiza el estado cuando el usuario cambia la selección
  };

  return (
    <div>
      <h1>Seleccione un Superhéroe de Marvel</h1>
      <select value={selectedHero} onChange={handleChange}>
        <option value="">Seleccione un superhéroe</option>
        {/* Mapea solo los héroes de Marvel para crear las opciones en el select */}
        {marvelHeroes.map(hero => (
          <option key={hero.superhero} value={hero.superhero}>
            {hero.superhero} ({hero.publisher})
          </option>
        ))}
      </select>
     
    </div>
  );
}

export default NoticiaSeleccionada;