import React from 'react'

const Contact = (props) => {
    console.log(props)
    // setTimeout(() => {
    //    props.history.push('/about')
    // }, 2000) 
    // This is programmatic redirects : after 2 seconds, the user is redirected on the path (object 'history', mathod 'push' + location)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <h5>Corneliu GAINA - aspirant Junior Web Developer from BeCode</h5>
            <p><a href="https://www.linkedin.com/in/corneliugaina/">LinkedIn</a></p>
            <p><a href="https://github.com/corneliushka">GitHub</a></p>
________</div>
    )
}

export default Contact;