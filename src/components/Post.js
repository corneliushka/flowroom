import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        id: null // in console, we'll get an object with match property and params with post_id
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id; // the id from url is assigned
        axios.get('https://jsonplaceholder.typicode.com/posts' + id)
        this.setState({
            id: id // we grab the id previously assigned
        })
    }
    render() {
        return (
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Post