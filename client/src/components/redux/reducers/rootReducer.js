import {addNewWordConst} from '../constants/action-types';

const initialState = 
{
    words: [{word: 'Hello', translate: 'Привет'}]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case addNewWordConst:
            return { ...state, words: [...state.words, action.payload] };
        default:
            return state;
    }
}

export default rootReducer