import React from "react";
import {createBrowserHistory} from 'history';
import UsersTable from "../components/UsersTable";
import PostList from "../components/UserPostList";
import CommentList from "../components/PostCommentList";
import {Router, Switch, Route} from "react-router-dom";

const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={UsersTable}/>
            <Route exact path="/posts/:userId" component={PostList}/>
            <Route exact path="/comments/:postId" component={CommentList}/>
        </Switch>
    </Router>
);

export default AppRouter