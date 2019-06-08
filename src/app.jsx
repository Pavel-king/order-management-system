import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Layout from 'components/layout/index.jsx'
//页面
import Home from 'pages/home/index.jsx'
import Login from 'pages/login/index.jsx'
import ErrorPage from 'pages/error/index.jsx'
import UserList from 'pages/user/index.jsx';

function App(props){
    let LayoutRouter = (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/product' component={Home} />
                <Route path='/product-category' component={Home} />
                <Route path='/user/index' component={UserList} />
                <Redirect exact from='/user' to='/user/index' />
                <Route component={ErrorPage} />
            </Switch>
        </Layout>
    );
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' render={ props => ( LayoutRouter )} />
            </Switch>    
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)