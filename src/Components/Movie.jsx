import React from "react";

export default function Movie(props) {
  const { movie, onDelete } = props;
  let [likeButton, setLikeButton] = React.useState("🤍");
  let [watchlist, setWatchlist] = React.useState("Add to watchlist");

  //function for like buton
  const handleLikeButton = () => {
    //console.log("Like button clicked");
    let copyLikeButton = likeButton === "🤍" ? "❤️" : "🤍";
    setLikeButton(copyLikeButton);
  };

  //function to add or remove a movie from watchlist
  const addToWatchlist = () => {
    //console.log("Add to watchlist button clicked");
    let copyWatchlist =
      watchlist === "Add to watchlist"
        ? "Remove from Watchlist"
        : "Add to watchlist";
    setWatchlist(copyWatchlist);
  };

  return (
    <>
      <div className="details">
        <div>Title: {movie.title}</div>
        <div>Rating: {movie.rating}</div>
        <div>Actors: {movie.actors + " "}</div>

        <div className="like" onClick={handleLikeButton}>
          {likeButton}
        </div>
      </div>
      <div
        className={
          watchlist === "Add to watchlist" ? "black-watchlist" : "red-watchlist"
        }
        onClick={addToWatchlist}
      >
        {watchlist}
      </div>
      <div className="delete" onClick={() => onDelete(movie.title)}>
        Delete from list
      </div>
    </>
  );
}
