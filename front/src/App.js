import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      prueba:[],
      components:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  render() {
    var data = this.state.prueba;
    const self = this;
    return (
      <div className="App"> 
  
      <div><h1>Parcial 1</h1>
      <textarea>
        cols="40";
        rows="20";
        ref={(div) =>this.divTarget=div}>
        soy un div
      </textarea>
      
      <button onClick={() =>{
        var obj= {
          x: "parcial",
          y:{field :"vv", "type":"quantitative"}
        };
        this.divTarget.value=JSON.stringify(obj,mull,2);

      }
      }>cambialo

      </button>

      </div>
      </div>
      );
  }

}

export default App;
