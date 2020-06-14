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
        country: ""
      },
      weather: [{description: "", icon: "50n"}]
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
        <h1 >Simple Weather App</h1>
        <div className="my-form">
        <input type="text" onChange={(event) => this.changed(event)} placeholder="Search for a City"/>
        <button type = "submit" className="btn btn-danger submitButton btn-lg" onClick={this.getWeather}>Submit</button>
        </div>
        {/* </form> */}

        
        <Cards
            City = {this.state.wdata.name}
            Temp = {this.state.wdata.main.temp}
            country = {this.state.wdata.sys.country}
            description = {this.state.wdata.weather[0].description}
          icon={"http://openweathermap.org/img/wn/" + this.state.wdata.weather[0].icon + "@2x.png"}
        />

        <h5 className="Footer"><i class="fab fa-react"></i>  App By Ashish</h5>
      </div>
    );
  }
}

export default App;
