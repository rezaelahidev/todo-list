import React, { Component } from "react";

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        event && event.target && event.target.value && this.setState({ name: event.target.value.trim() });
    }

    handleSubmit(event) {

        event.preventDefault();

        this.props.addTasks(this.state.name);

        this.setState({ name: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
        );
    }
}

export default Form;
