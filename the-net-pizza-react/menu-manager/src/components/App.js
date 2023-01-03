import React, { Component } from "react";
import PiattiEconomici from "./PiattiEconomici";
import Table from "./Table";

const menu = [
  { name: "Margherita", category: "pizze", price: 7 },
  { name: "Marinara", category: "pizze", price: 5 },
  { name: "Frutti di Mare", category: "pizze", price: 14 },
  { name: "Tagliata di Manzo", category: "secondi", price: 21 },
  { name: "Spigola al forno", category: "secondi", price: 25 },
  { name: "Cheesecake", category: "dolci", price: 7 },
];

export default class App extends Component {
  state = {
    menu: menu,
    title: "The Net Pizza",
  };

  render() {
    return (
      <div className="row">
        <h1>{this.state.title}</h1>
        <div className="col-8">
          <Table menu={this.state.menu} removeMenuItem={this.removeMenuItem} />
        </div>
        <div className="col-4">
          <PiattiEconomici piatti={this.state.menu} soglia="8"/>
          <PiattiEconomici piatti={this.state.menu} soglia="20"/>
        </div>
      </div>
    );
  }

  removeMenuItem = (index) => {
    this.setState({
      ...this.state,
      menu: this.state.menu.filter((e, i) => index !== i),
    });
  };
}
