import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {
/*     state = {
        post : null // in console, we'll get an object with match property and params with post_id
    }
    componentDidMount(){
        let id = this.props.match.params.post_id; // the id from url is assigned
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })  
                console.log(res)
            })
    } */
    
    render() {
        // creating some JSX for the post :
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post)