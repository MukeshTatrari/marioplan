import React, { Component } from 'react'
import { createProject } from '../../actions/projectActions'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import history from '../../utils/history'

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title !== '' && this.state.content !== '') {
            this.props.createProject(this.state)
            // history.push('/')
            // history.go('/')
        } else {
            console.log('ajsdaskkdas helllo')
        }
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Navigate to="/signin" />;
        }
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("gellloooo")
    return {
        createProject: (project) => dispatch(createProject(project))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)