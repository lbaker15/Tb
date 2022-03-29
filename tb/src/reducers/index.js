import { TIGER_TYPE, EMAIL, PASSWORD, COLOUR, ANIMAL } from '../actions/index';

export const initialState = {animal: { array: [], valid: false }, password: { valid: false }, tiger_type: { valid: false }, colour: { valid: false }, email: { valid: false }}

export const reducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case EMAIL:
            return { ...state, email: action.payload };
        case PASSWORD:
            return { ...state, password: action.payload };
        case COLOUR:
            return { ...state, colour: action.payload };
        case ANIMAL:
            return { ...state, animal: action.payload };
        case TIGER_TYPE:
            return { ...state, tiger_type: action.payload };
        default:
            return state;
    }
}