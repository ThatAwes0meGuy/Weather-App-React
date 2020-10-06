import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Card/Cards';
import Switch from "./Components/Switch/Switch";
const API_KEY = "78872b499149036415d75305243de5d8";


class App extends Component{

  state = {
    city:"Hyderabad",
    display: "dark",
    wdata:
    {
      name: '',
      main: {
        temp: 0
      },
      sys: {
        country: ""
      },
      weather: [{ description: "", icon: "50n" }]
    }
    
        
  }
  
  getWeather = async () => {
    const api_Call = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+ this.state.city +"&appid=" + API_KEY + "&units=metric");
    const data = await api_Call.json();
    console.log(data);    
    this.setState({
      wdata:data
    })
  }


  changed = (event) => {
    this.setState({
      city: event.target.value
    });
    
  }

    displayHandler = () => {
      if(this.state.display==="dark") {
        return (
          <div className="firstPage container-fluid" style={{ background: "#0a1f44", paddingTop: "50px" }} >

            <span className="switchControl"> <Switch /></span>
            <h1>Simple Weather App</h1>

            <div className="my-form">
              <input type="text" onChange={(event) => this.changed(event)} placeholder="Search for a City" />
              <button type="submit" className="btn btn-danger submitButton btn-lg" onClick={this.getWeather}>Submit</button>
            </div>

            <Cards
              City={this.state.wdata.name}
              Temp={this.state.wdata.main.temp}
              country={this.state.wdata.sys.country}
              description={this.state.wdata.weather[0].description}
              icon={"http://openweathermap.org/img/wn/" + this.state.wdata.weather[0].icon + "@2x.png"}
            />

            <h5 className="Footer"><i class="fab fa-react"></i>  App By Ashish</h5>
          </div>
        );
      }
      if (this.state.display === "light") {
        return (
          <div className="firstPage container-fluid" style={{ background: "#fff", paddingTop: "50px" }} >

            <span className="switchControl"> <Switch /></span>
            <h1 style={{ color: "#07540"}}>Simple Weather App</h1>

            <div className="my-form">
              <input type="text" onChange={(event) => this.changed(event)} placeholder="Search for a City" />
              <button type="submit" style={{ color:"#0a1f44"}}className="btn btn-danger submitButton btn-lg" onClick={this.getWeather}>Submit</button>
            </div>

            <Cards
              City={this.state.wdata.name}
              Temp={this.state.wdata.main.temp}
              country={this.state.wdata.sys.country}
              description={this.state.wdata.weather[0].description}
              icon={"http://openweathermap.org/img/wn/" + this.state.wdata.weather[0].icon + "@2x.png"}
            />

            <h5 className="Footer"><i class="fab fa-react"></i>  App By Ashish</h5>
          </div>
          );
      }
    }
  
    displayChange = () => {
      if(this.state.display==="dark") {
        this.setState({
          display: "light"
        });
      }
      if (this.state.display === "light") {
        this.setState({
          display: "dark"
        });
      }
    
    }
  render() {

    return(
      
      <div className="firstPage container-fluid" style={{background:"#0a1f44", paddingTop: "50px"}} >
      
        <span className="switchControl"> <Switch onClick={this.displayChange}/></span>
          <h1>Simple Weather App</h1>
        
        <div className="my-form">
        <input type="text" onChange={(event) => this.changed(event)} placeholder="Search for a City"/>
        <button type = "submit" className="btn btn-danger submitButton btn-lg" onClick={this.getWeather}>Submit</button>
        </div>
        
        <Cards
          City={this.state.wdata.name}
          Temp={this.state.wdata.main.temp}
          country={this.state.wdata.sys.country}
          description={this.state.wdata.weather[0].description}
          icon={"http://openweathermap.org/img/wn/" + this.state.wdata.weather[0].icon + "@2x.png"}
        />
        
        <h5 className="Footer"><i class="fab fa-react"></i>  App By Ashish</h5>
      </div>
    );
  }
}

export default App;
