import React, { Component } from 'react';
import './App.css';
import vegaEmbed from "vega-embed";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData = [
        {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
        {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
        {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
      ],

      spec = {
        $schema: "https://vega.github.io/schema/vega-lite/v2.json",
        description: "A simple bar chart with embedded data.",
        data: {
          name: myData 
        },
        mark: "bar",
        encoding: {
          y: { "field": "a", "type": "ordinal" },
          x: { "field": "b", "type": "quantitative" }
        }
      }

    }
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount(){

    const embed_opt = {"mode": "vega-lite"};    
    const el = document.getElementById('vis');
    const view = vegaEmbed("#vis", this.state.spec, embed_opt)
      .catch(error => console.log(el, error))
      .then((res) =>  res.view.insert("myData", this.state.myData).run());
  }

  componentDidUpdate(){

    const embed_opt = {"mode": "vega-lite"};    
    const el = document.getElementById('vis');
    const view = vegaEmbed("#vis", this.state.spec, embed_opt)
      .catch(error => console.log(el, error))
      .then((res) =>  res.view.insert("myData", this.state.myData).run());

  }


  handleChange() {
    try {
      this.setState({
        spec:JSON.parse(this.divTarget.value)
      })
    } catch (error) {
      datosJson = { error: 'Error en el spec' };

    }
  };



  render() {

    return (
      <div className="App">

        <div>
          <h1>Parcial 1</h1>
          <h2>JSON</h2>
          <textarea
            class name ="JSON"
            cols="40"
            rows="20"
            ref={(div) => this.divTarget = div}>
          </textarea>
          <h2>SPEC</h2>
          <textarea
            class name ="spec"
            cols="40"
            rows="20"
            ref={(div) => this.divTarget = div}>
          </textarea>
          
          <div id="vis"></div>
          <button>
          </button>

        </div>
      </div>
    );
  }

}


export default App;
