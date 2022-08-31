import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Filmes() {

    const [filmes, setFilmes] = useState([]); 

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://swapi.dev/api/films/?format=json`)
          const data = await response.json();
      
          setFilmes(data.results);
          
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
            <h1>Lista de Filmes</h1>
            {filmes.map((filmes, i) => {
                return (
                    <div className="card" key={i}>
                    <h2>{filmes.title}</h2>
                    <h3>{filmes.director}</h3>
                    <h3>{filmes.created}</h3>
                    <h3>{filmes.episode_id}</h3>
                    <h3>{filmes.release_date}</h3>
                </div>
                )
            })}
            </header>
      </div>
    );
  }