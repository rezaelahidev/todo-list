import React, { Component } from "react";

class FilterButton extends Component {

    constructor(props){

        super(props);

        this.state ={
            action: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
console.log(this.props)
        this.setState(
            {
                action: this.props.name
            }
        );
    }

    render(props) {        
        return (
        <div>
            <button onClick={this.handleClick} type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>{this.props.name}</span>
            <span clase="visually-hidden"> tasks</span>
            </button>
        </div>
        );
    }
}

export default FilterButton;
