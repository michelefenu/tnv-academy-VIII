import React, { Component } from "react";

export default class AddPiatto extends Component {
  initialState = {
    name: "",
    category: "",
    price: "",
  };

  state = this.initialState;

  render() {

    const {name, category, price} = this.state;

    return (
      <form>
        <h3>Aggiungi un nuovo piatto</h3>
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="category" className="form-label">
          Categoria
        </label>
        <select
          className="form-control"
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={this.handleChange}

        >
          <option value="antipasti">Antipasti</option>
          <option value="primi">Primi</option>
          <option value="secondi">Secondi</option>
          <option value="dolci">Dolci</option>
        </select>
        <label htmlFor="price" className="form-label">
          Prezzo
        </label>
        <input
          className="form-control"
          type="number"
          name="price"
          id="price"
          onChange={this.handleChange}
          value={price}
        ></input>
        <button className="btn btn-primary mt-2" onClick={this.submitForm}>Aggiungi</button>
      </form>
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
        ...this.state,
        [name]: value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleAddPiatto(this.state);
    this.setState(this.initialState);
  }
}
