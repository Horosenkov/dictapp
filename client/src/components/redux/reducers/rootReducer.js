import {addNewWordConst} from '../constants/action-types';
import {addNewDictionaryConst} from '../constants/action-types';
import uuid from 'uuid/v4';

const initialState = 
{
    dictionaries: 
    [
        {id:uuid(), name: 'Simple English', words:[{id: uuid(), value:'Hello', translates:["Привет"]}]},
    ]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case addNewWordConst:
            var dictId = action.payload.dictId;
            var word = action.payload.word;

            var dictionary = state.dictionaries.find(dict => dict.id === dictId);
            dictionary.words = [...dictionary.words, word];

            return state;
        case addNewDictionaryConst:
            var dictId = uuid();
            var name = action.payload.name
            state.dictionaries = [...state.dictionaries, {id:dictId, name:name, word:[]}]

            return state;
        default:
            return state;
    }
}

export default rootReducer