import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


// initialize component





//App is the major component - we will add smaller components and render them
class App extends React.Component{
  // you don't have to use constructor in R16
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined, 
    description: undefined, 
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`
    )
    const data = await api_call.json();
    
    console.log('Data' + data);
    // don't ever directly manipulate state - use set state
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })

  }
  render(){
    return(
      // returns jsx - We need Babel to run jsx for the browser to understand 
      //You can ONLY return one parent element - you only get one div per JSX
      <div>
        <Titles />
        {/* form component has access to props in form js file */}
        <Form getWeather={this.getWeather}/>
        <Weather 
            temperature={this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidty}
            description = {this.state.description}
            error = {this.state.error}
        />
      </div>
    );
  }
};

export default App;