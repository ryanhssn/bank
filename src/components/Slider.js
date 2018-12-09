import React, { Component } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import BankList from "./BankList";

import "../App.css";
class Slider extends Component {
  state = {
    show: false,
    type: "ifsc",
    clear: false
  };

  openModal = type => {
    this.setState({
      show: true,
      type,
      clear: false
    });
  };

  cancleModal = () => {
    this.setState({
      show: false,
      type: "",
      clear: true
    });
  };

  render() {
    return (
      <div className="slider">
        <Modal
          show={this.state.show}
          modalClosed={this.cancleModal}
          type={this.state.type}
        >
          <p>{this.state.type}</p>
          <SearchBar type={this.state.type} clear={this.state.clear} />
          <BankList clear={this.state.clear} />
        </Modal>
        <h2>React. Bank.</h2>
        <div className="rightpartDiv">
          <div onClick={() => this.openModal("ifsc")} className="SmallBar">
            <p>Search by IFSC</p>
          </div>

          <div onClick={() => this.openModal("branch")} className="SmallBar">
            <p>Search by Branch Name</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
