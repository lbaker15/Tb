export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const COLOUR = 'COLOUR';
export const ANIMAL = 'ANIMAL';
export const TIGER_TYPE = 'TIGER_TYPE';

export const setEmail = (action) => {
    return {
        type: EMAIL,
        payload: action
    }
}
export const setPassword = (action) => {
    return {
        type: PASSWORD,
        payload: action
    }
}
export const setColour = (action) => {
    return {
        type: COLOUR,
        payload: action
    }
}
export const setAnimal = (action) => {
    return {
        type: ANIMAL,
        payload: action
    }
}
export const setTigerType = (action) => {
    return {
        type: TIGER_TYPE,
        payload: action
    }
}