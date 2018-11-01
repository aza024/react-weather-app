import React from 'react'
// #stateless option

// can explicitly return without return keyword when using only one div

const Weather = props => (
            <div>
                {/* If Statement */}
                { props.city  && props.country  && <p>Location { props.city}{props.country }</p> }
                { props.temperature && <p>Temperature: { props.temperature }</p> }
                { props.humdity && <p>Humidity: { props.humidity }</p> }
                { props.description && <p>Weather Conditions:{ props.description }</p> }
                { props.error && <p>{ props.error }</p> }
            </div>
        );
    


// class Weather extends React.Component{
//     render(){
//         return(
//             <div>
//                 {/* If Statement */}
//                 { this.props.city  && this.props.country  && <p>Location { this.props.city}{this.props.country }</p> }
//                 { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
//                 { this.props.humdity && <p>Humidity: { this.props.humidity }</p> }
//                 { this.props.description && <p>Weather Conditions:{ this.props.description }</p> }
//                 { this.props.error && <p>{ this.props.error }</p> }
//             </div>
//         )
//     }
// }
export default Weather;