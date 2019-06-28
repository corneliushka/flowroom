import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post : null // in console, we'll get an object with match property and params with post_id
    }
    componentDidMount(){
        let id = this.props.match.params.post_id; // the id from url is assigned
        axios.get('https://jsonplaceholder.typicode.com/posts' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res)
            })
    }
    
    render() {

        // creating some JSX for the post :
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

export default Post