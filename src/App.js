import React, { useState } from "react";
import "./styles.css";
import { database } from "./database";

var databaseArray = Object.keys(database);

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState("Marvel");
  function onclickHandler(movie) {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  }
  return (
    <div className="App">
      <header className="spanRed">for binge</header>
      <h2>
        cofused what to watch on the weekend?? try{" "}
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
            <div className="info-card container">
              <img className="left-card" src={movie.poster} alt="poster" />

              <div className="right-card">
                <div className="movie-name"> {movie.name}</div>
                <div className="movie-date">
                  Released On : {movie.releaseDate}
                </div>
                <div className="movie-rating">
                  IMDb Rating : {movie.ratingIMDb}
                </div>
                <div className="movie-director">
                  Directed by : {movie.director}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
