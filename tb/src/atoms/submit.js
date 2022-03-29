import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

const Submit = ({ reducer }) => {
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(true)
    const [alert, setAlert] = useState('')
    const handleChange = (e) => {
        e.preventDefault()
        if (disabled) {
            setAlert('Please ensure all inputs are entered correctly')
        } else {
            setAlert('')
            // let data = new FormData()
            // data.append('data', reducer)
            // fetch('', {
            //     method: 'POST',
            //     body: data
            // })
            // .then(res => res.json())
            // .then(data => if (data.Success) {setAlert('Form Submitted')})
        }
    }
    useEffect(() => {
        if (reducer.email.valid && reducer.password.valid && reducer.animal.valid && reducer.colour.valid) {
            if (reducer.animal.array.includes('tiger')) {
                if (reducer.tiger_type.valid) {
                    setDisabled( false )
                } else {
                    setDisabled( true )
                }
            } else {
                setDisabled( false )
            }
        } else {
            setDisabled( true )
        }
    }, [reducer])
    return (
        <React.Fragment>
            {alert.length > 0 &&
            <span
            data-testid="alert"
            >{alert}</span>
            }
            <input 
            data-testid="submit"
            className={disabled ? 'form--disabled' : 'form--enabled'}
            type='submit' value='Create account' onClick={handleChange} />
        </React.Fragment>
    )
}

const mapState = (state) => ({
    reducer: state.reducer
})
export default connect(mapState)(Submit);