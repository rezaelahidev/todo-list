import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "",
            isEditing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();

        this.props.editTask(this.props.id, this.state.name);
        this.setState(
            {
                name: "",
                isEditing: false
            }
        );
    }

    handleChange(e) {
        this.setState({ isEditing: this.state.isEditing, name: (e.target.value && e.target.value.trim()) ?? "" });
    }

    editingTemplate() {

        return (
            <form onSubmit={this.handleSubmit} className="stack-small">
                <div className="form-group">
                    <label className="todo-label" htmlFor={this.props.id}>
                        New name for {this.props.name}
                    </label>
                    <input
                        id={this.props.id}
                        className="todo-text"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn todo-cancel">
                        Cancel
                        <span className="visually-hidden">renaming {this.props.name}</span>
                    </button>
                    <button type="submit" className="btn btn__primary todo-edit">
                        Save
                        <span className="visually-hidden">new name for {this.props.name}</span>
                    </button>
                </div>
            </form>
        );
    }

    viewTemplate() {

        return (
            <div className="stack-small">
                <div className="c-cb">
                    <input
                        id={this.props.id}
                        type="checkbox"
                        defaultChecked={this.props.completed}
                        onChange={() => this.props.toggleCompletedButton(this.props.id)}
                    />
                    <label className="todo-label" htmlFor={this.props.id}>
                        {this.props.name}
                    </label>
                </div>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => this.setState({ name: this.state.name, isEditing: true })}
                    >
                        Edit <span className="visually-hidden">{this.props.name}</span>
                    </button>
                    <button
                        type="button"
                        className="btn btn__danger"
                        onClick={() => this.props.deleteTask(this.props.id)}
                    >
                        Delete <span className="visually-hidden">{this.props.name}</span>
                    </button>
                </div>
            </div>
        );
    }

    render() {

        return (
            <li className="todo stack-small">
                {this.state.isEditing ? this.editingTemplate() : this.viewTemplate()}
            </li>
        );
    }
}

export default Todo;
