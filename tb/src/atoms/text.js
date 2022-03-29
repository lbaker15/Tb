import React from 'react';
import { connect } from 'react-redux';

const Text = ({ text, type }) => {
    if (type === 'h1') {
        return (
            <h1>{text}</h1>
        )
    } else if (type === 'h2') {
        return (
            <h2>{text}</h2>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Text)