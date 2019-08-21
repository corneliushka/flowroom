import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../../actions/postActions'

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


handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/flowroom');
}

    render() {
        // creating some JSX for the post :
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        DELETE
                    </button>
                </div>
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

const mapStateToProps = (state, ownProps) => { // the second argument refers to the props of the above component
    let id = ownProps.match.params.post_id;
    //console.log(id)
    return {
        post: state.posts.find(post => post.id === parseInt(id))
        // post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { 
            dispatch(deletePost(id))
        }
    }
}

// store.dispatch({type: }) // alors qu'on a notre fonction avec 'dispatch' en argument, on ne doit plus créer le store.dispatch...

export default connect(mapStateToProps, mapDispatchToProps)(Post);