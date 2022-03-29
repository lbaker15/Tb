import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setColour } from '../actions';

const Select = ({label, values}) => {
    const dispatch = useDispatch()
    let [val, setVal] = useState('')
    const handleChange = (e) => {
        let { value } = e.target;
        setVal(value)
        let obj = {value: value, valid: (value !== '') ? true : false}
        dispatch(setColour(obj))
    }
    return (
        <select onChange={handleChange} name={label} id={label}>
            <option value=''>Choose {label}</option>
            {values.map((value, i) => {
                return <option key={'color_value'+i} value={value}>{value}</option>
            })}
        </select>
    )
}

const mapState = (state) => ({
    reducer: state.reducer
})
export default connect(mapState)(Select);