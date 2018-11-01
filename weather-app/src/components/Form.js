import React from 'react';

class Form extends React.Component{
    render(){
        return(
            // react attr onSubmit(this.props.getweather)
            <form onSubmit={this.props.getWeather}>
                <input type="number" name="zipcode"placeholder="zipcode"/>

                <button>Get Weather </button>
            </form>
        )
    }
}

export default Form;