import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../icon/filter.svg';
import '../style/main.css';


class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data,
                })
            });
    };

    render() {
        return (
            <div className="App">
                <table className="table table-striped"
                       style={{
                           width: "80%",
                           borderRadius: "1em",
                           overflow: "hidden",
                           margin: "2% auto",
                       }}>
                    <thead className="thead">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <img className="ml-1" src={Icon}/>
                                <Link to={`/posts/${user.id}`}>{user.name}</Link>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.address.city}, {user.address.street}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersTable;
