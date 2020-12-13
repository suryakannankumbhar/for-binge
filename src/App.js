import React, { useState } from "react";
import "./styles.css";
import { database } from "./database";

var databaseArray = Object.keys(database);

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState("marvel");
  function onclickHandler(movie) {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  }
  return (
    <div className="App">
      <header className="spanRed">for binge</header>
      <h2>
        confused what to watch on the weekend?? try{" "}
        <span className="spanRed">for binge</span>!!
      </h2>
      <h2> a simple app with tons of options for you!!</h2>
      <hr />
      <section>
        <ul>
          {databaseArray.map(function (movie, index) {
            return (
              <li
                className="capsules"
                key={index}
                onClick={() => onclickHandler(movie)}
              >
                {movie}
              </li>
            );
          })}
        </ul>
      </section>
      <div className="cards">
        {database[selectedMovie].map((movie) => {
          return (
            <div className="movieCards">
              <img className="image" src={movie.poster} alt="poster" />

              <div className="infoCard ">
                <div className="spanRed"> {movie.name}</div>
                <div>Released On : {movie.releaseDate}</div>
                <div>IMDb Rating : {movie.ratingIMDb}</div>
                <div>Directed by : {movie.director}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
