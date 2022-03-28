import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setAnimal, setEmail, setPassword, setTigerType } from '../actions/index';

const Submit = ({ reducer }) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        //CHECK HERE
        e.preventDefault()
        console.log('click', reducer)
    }
    return (
        <React.Fragment>
            <input type='submit' value='Create account' onClick={handleChange} />
        </React.Fragment>
    )
}

const mapState = (state) => ({
    reducer: state.reducer
})
export default connect(mapState)(Submit);