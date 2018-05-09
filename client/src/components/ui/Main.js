import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Index from './Index'
import ExamPage from './ExamPage';
import DictionaryController from './Dictionary/DictionaryController';

class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/Dictionary' component={DictionaryController}/>
                <Route path='/Exam' component={ExamPage}/>
            </Switch>
        )
    }
}

export default Main;