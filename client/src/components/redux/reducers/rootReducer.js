import {addNewWordConst} from '../constants/action-types';
import uuid from 'uuid/v4';

const initialState = 
{
    words: [{id:uuid(), word: 'Hello', translates: ["Привет"]}],
    dictionaries: 
        [
            {id:uuid(), name: 'Simple English', words:[{id: uuid(), value:'Hello', translates:["Привет"]}]},
            {id:uuid(), name: 'Hard English', words:[{id: uuid(), value:'Hello', translates:["Привет"]}]},
            {id:uuid(), name: 'Motherfucking English', words:[{id: uuid(), value:'Hello', translates:["Привет"]}]},
        ]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case addNewWordConst:
            var dictId = action.payload.dictId;
            var word = action.payload.word;

            var dictionary = state.dictionaries.find(dict => dict.id = dictId);
            dictionary.words = [...dictionary.words, word];

            return state;
        default:
            return state;
    }
}

export default rootReducer