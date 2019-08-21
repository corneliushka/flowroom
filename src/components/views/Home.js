import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Hint from '../assets/img/hint.png'
import { connect } from 'react-redux' // we invoke this function + export the component wrapped in this (see bellow)

class Home extends Component {
    // Nous n'allons plus utiliser Axios ni le state dans le component (il sera dans le store maintenant)
    /*     state = {
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
    } */
    render(){
        console.log(this.props)
        const { posts } = this.props; // we are cycling in the props received by the component, instead of the state 
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Hint} alt="an insightful bulb"/>
                        <div className="card-content">
                            <Link to={'/flowroom/' + post.id}> {/* we surround the post and give an url to it */}
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);