import { Link } from "react-router-dom";

export default function App() {
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
      <main style={{ padding: "1rem 0" }}>
        <h2>Página Principal</h2>
      </main>
    </div>
  );
}