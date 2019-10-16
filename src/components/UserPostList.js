import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };
        this.userId = props.match.params.userId;
    }

    componentDidMount() {
        this.getPostList();
    }

    getPostList = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    posts: data,
                })
            });
    };

    render() {
        return (
            <div className="App">
                <table className="table table-striped" style={{
                    width: "80%",
                    borderRadius: "1em",
                    overflow: "hidden",
                    margin: "2% auto",
                }}>
                    <thead className="thead" style={{backgroundColor: "#2F4F4F"}}>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>
                                <Link to={`/comments/${post.id}`}>{post.title}</Link>
                            </td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default PostList;

