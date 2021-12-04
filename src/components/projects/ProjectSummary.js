import React from 'react'
import moment from 'moment';

const ProjectSummary = (props) => {
  const {title,content,createdAt} = props.project;
  const date =moment(createdAt.toDate()).calendar();
  return (
    
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  )
}

export default ProjectSummary