import React from "react";

// images
import yellowBlob from "./assets/blobs-yellow.png";
import blueBlob from "./assets/blobs-blue.png";

// components
import OpenScreen from "./components/OpenScreen";
import Questions from "./components/Questions";

function App() {
  // show questions screen
  const [showQuestions, setShowQuestions] = React.useState(false);

  return (
    <div>
      <img src={yellowBlob} className="blobs-yellow" />
      {showQuestions ? (
        <Questions />
      ) : (
        <OpenScreen setShowQuestions={setShowQuestions} />
      )}
      <img src={blueBlob} className="blobs-blue" />
    </div>
  );
}

export default App;