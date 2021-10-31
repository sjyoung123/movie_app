import React from "react";

function Food(propt) {
  return <h3>good {propt.fav}</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Food fav="kimchi" />
      <Food fav="cake" />
      <Food fav="bread" />
      <Food fav="noodle" />
    </div>
  );
}

export default App;
