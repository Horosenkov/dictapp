import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MenuPage from './MenuPage';
import DictionaryPage from './DictionaryPage';
import DictionaryAddPage from './DictionaryAddPage';
import DictionariesPage from './DictionariesPage';

class DictionaryController extends React.Component{
    render(){
        return (
            <div>
                <h1>Dictionary Controller</h1>
                <Switch>
                    <Route exact path='/Dictionary'  component={MenuPage}/>
                    <Route exact path='/Dictionary/Add' component={DictionaryAddPage}/>
                    <Route path='/Dictionary/All' component={DictionariesPage}/>
                    <Route path='/Dictionary/:id' component={DictionaryPage}/>
                </Switch>
            </div>
        );
    }
}

export default DictionaryController;