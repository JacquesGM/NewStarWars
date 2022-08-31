import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Especies() {
    
    const [especies, setEspecies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://swapi.dev/api/species/?format=json`)
          const data = await response.json();
      
          setEspecies(data.results);

          
          
        }
        
        fetchData();
      }, []);
    
    return (
       <div>
        <h1>Star Wars</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/" >Home</Link> |{" "}
          <Link to="/filmes">Filmes</Link> |{" "}
          <Link to="/personagens">Personagens</Link> |{" "}
          <Link to="/planetas">Planetas</Link> |{" "}
          <Link to="/especies">Especies</Link> 
        </nav>

        <header>       
            <h1>Lista de Espécies</h1>
            {especies.map((especies, i) => {
                return (
                    <div className="card" key={i}>
                    <h2>{especies.name}</h2>
                    <h3>{especies.average_height}</h3>
                    <h3>{especies.classification}</h3>
                    <h3>{especies.designation}</h3>
                    <h3>{especies.skin_colors}</h3>
                </div>
                )
            })}
        </header>
      </div>
    );
  }