import React from 'react';

const Label = ({label, string}) => {
    return (
        <label className="label" htmlFor={label}>
            {string}
        </label>
    )
}

export default Label;