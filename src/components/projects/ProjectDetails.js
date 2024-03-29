import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom'
import moment from 'moment';


const ProjectDetails = (props) => {
    const { id } = useParams();
    const { projects, auth } = props
    if (!auth.uid) {
        return <Navigate to="/signin" />;
    }
    if (projects) {
        const project = projects[id];
        console.log("date of project::::",);
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const projects = state.firestore.data.projects;
    console.log("Projectsssss :::::",projects)
    return {
        projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(ProjectDetails)