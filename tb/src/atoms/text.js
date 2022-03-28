import React from 'react';
import { connect } from 'react-redux';

const Text = ({ text, type }) => {
    if (type === 'h1') {
        return (
            <h1>{text}</h1>
        )
    } else if (type === 'h3') {
        return (
            <h3>{text}</h3>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Text)