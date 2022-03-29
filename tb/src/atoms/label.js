import React from 'react';

const Label = ({label, string}) => {
    let capitalized = String(string[0]).toLocaleUpperCase() + String(string).substring(1)
    return (
        <label className="label" htmlFor={label}>
            {capitalized}
        </label>
    )
}

export default Label;