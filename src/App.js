import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  /*  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    hasTrunfo: '',
    isSaveButtonDisabled: '',
    onInputChange: '',
    onSaveButtonClick: '',
  }; */

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
