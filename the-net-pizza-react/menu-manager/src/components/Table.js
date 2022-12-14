import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from './TableBody'

export default class Table extends Component {
  render() {
    const menu = this.props.menu;
    const removeMenuItem = this.props.removeMenuItem;
    const editMenuItem = this.props.editMenuItem;

    return (
      <table className="table">
        <TableHeader />
        <TableBody menu={menu} removeMenuItem={removeMenuItem} editMenuItem={editMenuItem}/>
      </table>
    );
  }
}
