import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.todos(this.state.task)
        this.setState({
            task: '',
        })
    }

    render() {

        return(
            <form onSubmit={this.submitForm}>
                <label htmlFor="task">Task</label>
                <input 
                type="text"
                name="task"
                id="task"
                value={this.state.task}
                onChange={this.handleChange}
                />
                <input 
                type="submit"
                value="Add Task"
                id="btn-submit"
                />
            </form>
        )
    }

}

export default Form;
