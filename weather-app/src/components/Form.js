import React from 'react';

class Form extends React.Component{
    render(){
        return(
            // react attr onSubmit(this.props.getweather)
            <form onSubmit={this.props.getWeather}>

        
                <input type="text" name="city"placeholder="country"/>

                <button>Get Weather </button>
            </form>
        )
    }
}

export default Form;