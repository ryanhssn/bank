import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBankByIFSC, getBankByBranch } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ifsc: "SBIN0031024",
      branch: "",
      bank: ""
    };
  }

  componentWillReceiveProps(nextProps) {
   
    nextProps.clear === true ? this.setState({
      ifsc: "",
      branch: "",
      bank: ""
    }) : console.log('');
     
  }

  onInputChange = event => {
    this.setState({
      ifsc: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.getBankByIFSC(this.state.ifsc);
  };

  onBankChange = event => {
    this.setState({
      bank: event.target.value
    });
   
  };

  onBranchChange = event => {
    this.setState({
      branch: event.target.value
    });

    if (this.state.branch.length >= 3) {
      this.props.getBankByBranch(this.state.bank, this.state.branch);
    }
  };

  render() {
    return this.props.type === "ifsc" ? (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter IFSC Code"
          className="form-control"
          value={this.state.ifsc}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <input
          placeholder="Enter Bank Name"
          className="form-control"
          value={this.state.bank}
          onChange={event => this.onBankChange(event)}
        />
        <input
          placeholder="Enter Branch Name"
          className="form-control"
          value={this.state.branch}
          onChange={event => this.onBranchChange(event)}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBankByIFSC, getBankByBranch }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
