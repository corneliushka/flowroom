import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">

            </div>
            <div className="card-content">
                <h5 className="card-title">Project Title - {id}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae, dicta sunt dolorem quos, maxime, nisi placeat suscipit consectetur autem magni. Qui nulla molestiae excepturi dolores, voluptatibus necessitatibus nostrum at.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by The Author</div>
                <div>2nd September 2019, 2am</div> 
            </div>
        </div>

    )
}

export default ProjectDetails
