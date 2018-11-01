import React from "react";
import Titles from "./components/Titles"

// initialize component


//App is the major component - we will add smaller components and render them
class App extends React.Component{
  render(){
    return(
      // returns jsx - We need Babel to run jsx for the browser to understand 
      //You can ONLY return one parent element - you only get one div per JSX
      <div>
        <p>Hello!</p>
        <h1>YO </h1>
      </div>
    );
  }
};

export default App;