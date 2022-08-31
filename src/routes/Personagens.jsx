import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Personagens() {
    
    const [personagens, setPersonagens] = useState([]); 
    
    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://swapi.dev/api/people/?format=json`)
          const data = await response.json();
      
          setPersonagens(data.results);
          
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
            <h1>Lista de Personagens</h1>
            {personagens.map((personagens, i) => {
                return (
                    <div className="card" key={i}>
                    <h2>{personagens.name}</h2>
                    <h3>{personagens.height}</h3>
                    <h3>{personagens.hair_color}</h3>
                    <h3>{personagens.mass}</h3>
                    <h3>{personagens.gender}</h3>
                </div>
                )
            })}
            </header>
      </div>
    );
  }