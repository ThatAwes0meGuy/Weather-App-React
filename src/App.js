import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
class App extends Component{

  render() {
    return(
      <div className="firstPage container-fluid" style={{background:"#0a1f44", paddingTop: "50px"}} >
      <form>
          <h1 style={{ color: "white", lineHeight:"1.5", fontSize: "50px" }} >Simple Weather App</h1>
       <input type="text"/>
        <button type = "submit" className="btn btn-danger submitButton btn-lg">Submit</button>
        </form>

        <Cards />
      </div>
    );
  }
}

export default App;
