import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Hint from '../hint.png'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0, 10)
            }) // the response data with properties (id, title, ...)
        })
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Hint} alt="an insightful bulb"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}> {/* we surround the post and give an url to it */}
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
                })
        ) : (
            <div className="center">No posts Yet</div>
        ); 
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }

}

export default Home;