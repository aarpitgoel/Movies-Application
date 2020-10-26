import React from "react";
import Movie from "./Movie";
import Reset from "./Reset";

export default function Movies() {

 let [movieDetails, setMovieDetails]= React.useState([
    {
      id: 1,
      title: "Airlift",
      rating: 8.0,
      actors: ["Akshay Kumar", "Nimrat Kaur"]
    },
    {
      id: 2,
      title: "Chak De! India",
      rating: 8.2,
      actors: ["Shahrukh Khan", "Sagarika Ghatge"]
     },
    {
      id: 3,
      title: "3 Idiots",
      rating: 8.4,
      actors: ["Aamir Khan", "Kareena Kapoor"]
     },
    {
      id: 4,
      title: "2 States",
      rating: 6.9,
      actors: ["Arjun Kapoor", "Aalia Bhatt"]
    },
    {
      id: 5,
      title: "Hichki",
      rating: 7.5,
      actors: ["Rani Mukherjee", "Neeraj Kabi"]
     },
    {
      id: 6,
      title: "Andhadhun",
      rating: 8.3,
      actors: ["Ayushmann Khurrana", "Radhika Apte"]
    }
  ]);

 

  //function to delete movie from list
  const deleteFromList = (title) => {
    //console.log("Deleted");
    let temp = movieDetails.filter((movie) => movie.title!==title);
    setMovieDetails(temp);
  };

if(movieDetails.length === 0){
  return(
      <>
        <Reset key={0}/>
      </>
  );
}else{
  return (
    <>
    <div className="container" >
      {movieDetails.map((el) => (
        <div className="movie-container">
        <Movie
          key={el.id}
          movie={el}
          onDelete={deleteFromList}
        />
        </div>
      ))}
     </div>
     
    </>
  );
}
}
