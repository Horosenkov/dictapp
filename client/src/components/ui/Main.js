import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Index from './Index'
import AddWordPage from './AddWordPage'
import WordListPage from './WordListPage';

class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/AddWord' component={AddWordPage}/>
                <Route path='/WordList' component={WordListPage}/>
            </Switch>
        )
    }
}

export default Main;