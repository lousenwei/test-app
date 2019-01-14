import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        console.log(this.props);
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                    return (
                        <div className="post card" key={post.id}>
                            <div className="card-content">
                                <span className="card-title red-text">{post.title}</span>
                            </div>
                        </div>
                    )
                }
            )
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="App">
                {postList}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);
