//import '../node_modules/semantic-ui-css/semantic.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

//Custom
import App from './components/ui/App';
import store from './components/redux/store/index'

ReactDOM.render((<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>), document.getElementById('root'));

