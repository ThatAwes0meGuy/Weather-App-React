import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'

const API_KEY = "78872b499149036415d75305243de5d8";


class App extends Component{

  state = {
    city:"Hyderabad",
    wdata: {
      name:'',
      main: {
        temp: 0
      },
      sys:{
        country: "IN"
      }
    }
  }
  
  getWeather = async () => {
    // e.preventDefault();
    const api_Call = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+ this.state.city +"&appid=" + API_KEY + "&units=metric");
    const data = await api_Call.json();
    console.log(data);    
    this.setState({
      wdata: data
    })
  }


  changed = (event) => {
    this.setState({
      city: event.target.value
    });
    
  }


  render() {

    return(
      <div className="firstPage container-fluid" style={{background:"#0a1f44", paddingTop: "50px"}} >
      {/* <form> */}
        <h1 style={{ color: "white", lineHeight: "1.5", fontSize: "50px" }} >Simple Weather App</h1>
          <input type="text" onChange={(event) => this.changed(event)} />
        <button type = "submit" className="btn btn-danger submitButton btn-lg" onClick={this.getWeather}>Submit</button>
        {/* </form> */}
        <Cards
            City = {this.state.wdata.name}
            Temp = {this.state.wdata.main.temp}
            country = {this.state.wdata.sys.country}
        />
        
      </div>
    );
  }
}

export default App;
