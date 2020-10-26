import React from "react";
import Movies from "./Movies";

export default function Reset() {
  let [reset, setReset] = React.useState(false);

  //function to display all movies again on screen
  const resetList = () => {
    console.log("Reset button clicked");
    setReset(true);
    //console.log(reset);
  };

  if (reset === true) {
    // console.log(" clicked");
    return (
      <>
        <Movies />
      </>
    );
  } else {
    return (
      <>
        <div className="reset">
          <div>
            You have deleted all movies from list. Click on reset button to see
            list again.
          </div>
          {<br />}
          <button class="button" onClick={resetList}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
