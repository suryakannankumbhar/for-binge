import React, { useState } from "react";
import "./styles.css";
import { database } from "./database";
import topB from "./keyboard_capslock-black-48dp.svg";

var databaseArray = Object.keys(database);

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState("all");
  function onclickHandler(movie) {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  }
  return (
    <div className="App">
      <header className="spanRed" id="home">
        for binge
      </header>
      <h2>
        confused what to watch on the weekend?? try{" "}
        <span className="spanRed">for binge</span>!!
      </h2>
      <h2> a simple app with tons of options for you!!</h2>
      <h5>*will be updating the database with more movies and genre soon!!</h5>
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
      <a href="#home">
        <img className="topBtn" src={topB} alt="top-button" />
      </a>
    </div>
  );
}
