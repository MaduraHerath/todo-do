import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import UIComponentActionTypes from './UIComponentActionTypes';
import UIComponentDispatcher from './UIComponentDispatcher';
import Counter from "./Counter";
import Todo from "./Todo";

class UIComponentStore extends ReduceStore {
    constructor() {
        super(UIComponentDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case UIComponentActionTypes.ADD_TODO:
                // Do nothing for now, we will add logic here soon!
                if (!action.text) {
                    return state;
                }
                const id = Counter.increment();
                return state.set(
                    id, new Todo({
                        id,
                        text: action.text,
                        complete: false
                    }));

            default:
                return state;
        }
    }
}

export default new UIComponentStore();