import UIView from '../views/UIView';
import {Container} from 'flux/utils';
import UIComponentStore from '../data/UIComponentStore';

function getStores() {
    return [
        UIComponentStore,
    ];
}

function getState() {
    return {
        todos: UIComponentStore.getState(),
    };
}

export default Container.createFunctional(UIView, getStores, getState);