import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


// initialize component

// const API_Key = '8c6fb598d4fa1b909e622dcc6c1fd8ec'



//App is the major component - we will add smaller components and render them
class App extends React.Component{
  // you don't have to use constructor in R16
  state = {
    
  }
  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    

    const api_call = await fetch
    (`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}`+'&appid=')

    const data = await api_call.json();
    
    console.log('Data' + data);

  }
  render(){
    return(
      // returns jsx - We need Babel to run jsx for the browser to understand 
      //You can ONLY return one parent element - you only get one div per JSX
      <div>
        <Titles />
        {/* form component has access to props in form js file */}
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;