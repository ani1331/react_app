import React, {Component} from 'react';

class CommentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
        };
        this.postId = props.match.params.postId;
    }

    componentDidMount() {
        this.getCommentList();
    }

    getCommentList = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    comments: data,
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
                    <thead className="thead" style={{backgroundColor: "#4682B4"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.comments.map(comment => (
                        <tr key={comment.id}>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default CommentList;