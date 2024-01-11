import React, { Component } from 'react';
import './App.css';
import Info from './components/info';
import EstimateForm from './components/EstimateForm';

class App extends Component {
  state = {
    showForm: true
  };

  handleShowEstimateForm = evt => {
    console.log(evt);
    this.setState({
      showForm: !this.state.showForm
    })
  };

  render() { 
    return (
      <div>
        <Info onHandleShowEstimateForm={this.handleShowEstimateForm} />
        <br/>
        {this.state.showForm && <EstimateForm />}
      </div>
    );
    // Si c'est true, on affiche le formulaire et si c'est false, on n'attendra jamais la partie "et" donc on n'affichera pas le formulaire
  }
}
 
export default App;