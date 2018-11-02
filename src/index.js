import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UIComponentContainer from '../src/UIComponent/containers/UIComponentContainer';
import UIComponentActions from '../src/UIComponent/data/UIComponentActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UIComponentContainer />, document.getElementById('root'));



UIComponentActions.addTodo('My first task');
UIComponentActions.addTodo('Another task');
UIComponentActions.addTodo('Finish this tutorial');
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
