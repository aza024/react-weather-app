import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

// initialize component

const API_Key = process.env.API_KEY


//App is the major component - we will add smaller components and render them
class App extends React.Component{
  getWeather = async () => {
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/forecast?zip=94158&appid=${API_Key}`);

    const data = await api_call.json();

    console.log(data);
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