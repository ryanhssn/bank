import React, { Component} from "react";

import '../App.css';

class Bank extends Component {
    render() {
        const { data } = this.props.location.state
        console.log(data);
        
        return (
            <div className="bankDetails">
                <h2>Bank Details:</h2>
                <h5>BANK : <span>{data.BANK}</span></h5>
                <h5>ADDRESS : <span>{data.ADDRESS}</span></h5>
                <h5>BRANCH : <span>{data.BRANCH}</span></h5>
                <h5>CITY : <span>{data.CITY}</span></h5>
                <h5>CONTACT : <span>{data.CONTACT}</span></h5>
                <h5>IFSC : <span>{data.IFSC}</span></h5>
                <h5>STATE : <span>{data.STATE}</span></h5>
            </div>
        )
    }
}


export default Bank;