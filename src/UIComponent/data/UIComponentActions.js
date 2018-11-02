import UIComponentActionTypes from './UIComponentActionTypes';
import UIComponentDispatcher from './UIComponentDispatcher';

const Actions = {
    addTodo(text) {
        UIComponentDispatcher.dispatch({
            type: UIComponentActionTypes.ADD_TODO,
            text,
        });
    },
};

export default Actions;