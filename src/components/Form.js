import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h2>Adicione Nova Carta</h2>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              name="name"
              type="text"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              id="description"
              name="description"
            />
          </label>
          <label htmlFor="attr1">
            Attr1
            <input
              data-testid="attr1-input"
              id="attr1"
              name="attr1"
              type="number"
            />
          </label>
          <label htmlFor="attr2">
            Attr2
            <input
              data-testid="attr2-input"
              id="attr2"
              name="attr2"
              type="number"
            />
          </label>
          <label htmlFor="attr3">
            Attr3
            <input
              data-testid="attr3-input"
              id="attr3"
              name="attr3"
              type="number"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              id="image"
              name="image"
              type="text"
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              id="rarity"
              name="rarity"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkTrunfo">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              id="checkTrunfo"
              name="checkTrunfo"
              type="checkbox"
            />
          </label>
          <button data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
