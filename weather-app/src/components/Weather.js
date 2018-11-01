import React from 'react'
// #stateless functional component
class Weather extends React.Component{
    render(){
        return(
            <div>
                {/* If Statement */}
                { this.props.city 
                    && this.props.country 
                    && <p>Location { this.props.city}, { this.props.country }</p> 
                }
                { this.props.temperature && 
                    <p>Temperature: { this.props.temperature }</p>
                }
                { this.props.humdity && 
                    <p>Humidity: { this.props.humidity }</p>
                }
                { this.props.description &&
                    <p>Weather Conditions:{ this.props.description }</p>
                }
                { this.props.error && 
                    <p>{ this.props.error }</p>
                }
            </div>
        )
    }
}

export default Weather;