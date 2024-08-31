import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [h1value, seth1Value] = useState("");

  function getValue(event) {
    setValue(event.target.value);
  }

  function showValue(event) {
    seth1Value(value);

    {
      /* Prevent page from reloading */
    }
    event.preventDefault();
  }

  return (
    <form onSubmit={showValue} action="">
      <div className="container">
        <h1>Hello {h1value}</h1>
        <input
          onChange={getValue}
          type="text"
          placeholder="What's your name?"
        />
        {/*<button type="submit" {onClick={showValue}}>Submit</button>;*/}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
