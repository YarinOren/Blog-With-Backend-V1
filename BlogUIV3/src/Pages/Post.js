import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`/posts/${id}`).then(res => {
            this.setState({
                post: res.data,
            });
        })
    }

    render() {
        return (
        <div>
            <center>
                {/*id={this.state.post.id}*/}
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.content}</p>
                {/*image={this.state.post.image}*/}
                {/*published={this.state.post.published}*/}
                {/*author={this.state.post.author}*/}
            </center>
        </div>
        );
    }
}

export default Post;