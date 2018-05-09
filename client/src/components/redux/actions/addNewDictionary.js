import {addNewDictionaryConst} from '../constants/action-types'

const addNewDictionary = dictionary => ({type: addNewDictionaryConst, payload: dictionary});

export default addNewDictionary;

