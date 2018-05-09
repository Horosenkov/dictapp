import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Index from './Index'
import AddWordPage from './AddWordPage'
import WordListPage from './WordListPage';
import ExamPage from './ExamPage';
import DictionaryController from './Dictionary/DictionaryController';

class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/AddWord' component={AddWordPage}/>
                <Route path='/WordList' component={WordListPage}/>
                <Route path='/Exam' component={ExamPage}/>
                <Route path='/Dictionary' component={DictionaryController}/>
            </Switch>
        )
    }
}

export default Main;