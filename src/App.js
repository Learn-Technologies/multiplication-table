// import React from "react";

// function App() {
//   // create a table of given number lets create it

//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is a simple React app.</p>
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  // multiplication table
  const [tableOf, setTableOf] = React.useState();
  function handleSubmit() {
    // the condition is if tableOf is null or not or false then return from here
    if (!tableOf) return;
    // now
    for (let i = 1; i <= 10; i++) {
      window.alert(`${tableOf} x ${i} = ${tableOf * i}`);
    }
  }
  return (
    <div>
      <h1> Table Of</h1>
      {/* Number(e.target.value) this will convert the value in number format if its is possible */}
      <input type="text" onChange={(e) => setTableOf(Number(e.target.value))} />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}

export default App;
