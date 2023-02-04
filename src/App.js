import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisable: true,
    arrInfo: [],
  };

  handleChange = ({ target }) => {
    const { name, value, checked } = target;
    const valor = target.type === 'checkbox' ? checked : value;
    this.setState({ [name]: valor }, () => {
      const {
        cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage,
      } = this.state;

      const maxNumber = 90;
      const sumNumber = 210;
      const minNumber = 0;
      const allNumber = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

      const verifySaveButton = cardName.length < 1
        || cardImage.length < 1
        || cardDescription.length < 1
        || Number(cardAttr1) > maxNumber
        || Number(cardAttr1) < minNumber
        || Number(cardAttr2) > maxNumber
        || Number(cardAttr2) < minNumber
        || Number(cardAttr3) > maxNumber
        || Number(cardAttr3) < minNumber
        || allNumber > sumNumber;
      this.setState({
        isSaveButtonDisable: verifySaveButton,
      });
    });
  };

  saveButton = () => {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo,
    } = this.state;

    const infosCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevState) => ({
      arrInfo: [...prevState.arrInfo, infosCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }
    ), () => this.verifyTrunfo());
  };

  verifyTrunfo = () => {
    const { arrInfo } = this.state;
    if (arrInfo
      .some((trunfo) => trunfo.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisable,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisable={ isSaveButtonDisable }
          onSaveButtonClick={ this.saveButton }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
