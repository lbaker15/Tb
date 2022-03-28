import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setAnimal, setEmail, setPassword, setTigerType } from '../actions/index';

const Input = ({ type, name, value, id, className, reducer }) => {
    const dispatch = useDispatch()
    const [val, setVal] = useState('')
    const handleChange = (e) => {
        let { value } = e.target;
        if (name === 'animal') {
            const { id } = e.target;
            const { animal } = reducer;
            let newArr = animal.array.filter(x => x !== id)
            if (newArr.length === animal.array.length) {
                newArr = newArr.concat(id)
            }
            let valid = (newArr.length > 1) ? true : false;
            let obj = { array: newArr, valid }
            dispatch(setAnimal(obj))
        } else {
            let valid;
            let func;
            if (name === 'email') {
                func = setEmail;
                valid = (value.length > 3 && value.includes('@')) ? true : false;
            } else if (name === 'username') {
                func = setPassword;
                valid = (value.length > 8) ? true : false;
            } else if (name === 'tiger_type') {
                func = setTigerType;
                valid = (value.length > 0) ? true : false;
            }
            setVal(value)
            let obj = { value: value, valid }
            dispatch(func(obj))
        }
    }

    return (
        <input
            className={id === 'tiger_type' ? (reducer.animal.array.includes('tiger')) ? className : className + ' hidden' : className}
            type={type} name={name}
            value={val}
            onChange={handleChange}
            id={id} />
    )

}

const mapState = (state) => ({
    reducer: state.reducer
})
export default connect(mapState)(Input);