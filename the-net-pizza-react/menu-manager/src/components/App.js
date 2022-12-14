import React, { Component } from "react";
import PiattiEconomici from "./PiattiEconomici";
import Table from "./Table";
import AddPiatto from "./AddPiatto";

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
      <div className="container-fluid">
        <div className="row">
          <h1>{this.state.title}</h1>
          <div className="col-7">
            <div className="col box mt-3 p-3">
              <Table
                menu={this.state.menu}
                removeMenuItem={this.removeMenuItem}
                editMenuItem={this.editMenuItem}
              />
            </div>
            <div className="col box mt-3 p-3">
              <AddPiatto handleAddPiatto={this.handleAddPiatto} />
            </div>
          </div>
          <div className="col-5">
            <div className="col box m-3 p-3">
              <PiattiEconomici piatti={this.state.menu} soglia="8" />
              <PiattiEconomici piatti={this.state.menu} soglia="20" />
            </div>
          </div>
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

  editMenuItem = (index, menuItem) => {
    this.setState({
      ...this.state,
      menu: this.state.menu.map((element, i) =>
        i === index ? menuItem : element
      ),
    });
  };

  handleAddPiatto = (piatto) => {
    this.setState({
      ...this.state,
      menu: [...this.state.menu, piatto],
    });
  };
}
