import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class BankList extends Component {
  renderBank = bankData => {
    
    return <h6 key={bankData._id}><Link to={{pathname: '/bank', state: { data: bankData}}} >{`${bankData.BANK}, ${bankData.BRANCH}`}</Link></h6>;
  };



  render() {
    return <div> { this.props.bank ? this.props.bank.map(this.renderBank) : console.log('no bank') }</div>;
  }


 
}

function mapStateToProps(state) {
  console.log(state.bank);
  
  return { bank: state.bank };
}

export default connect(mapStateToProps)(BankList);
