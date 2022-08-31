import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Planetas() {
   
    const [planeta, setPlaneta] = useState([]); 
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://swapi.dev/api/planets/?format=json`)
        const data = await response.json();
    
        setPlaneta(data.results);
        
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
            <h1>Lista de Planetas</h1>
            {planeta.map((planeta, i) => {
                return (
                    <div className="card" key={i}>
                    <h2>{planeta.name}</h2>
                    <h3>{planeta.climate}</h3>
                    <h3>{planeta.diameter}</h3>
                    <h3>{planeta.gravity}</h3>
                    <h3>{planeta.population}</h3>
                </div>
                )
            })}
            </header>
        </div>
    );
  }