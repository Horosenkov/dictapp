import {addNewWordConst} from '../constants/action-types'

const addNewWord = word => ({type: addNewWordConst, payload: word});

export default addNewWord;

