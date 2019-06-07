import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Layout from 'components/layout/index.jsx'
//页面
import Home from 'pages/home/index.jsx'

function App(props){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/product' component={Home} />
                    <Route exact path='/product-category' component={Home} />
                </Switch>
            </Layout>  
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)