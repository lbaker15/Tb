import React from 'react';
import { connect } from 'react-redux';

const Menu = ({ reducer }) => {
    console.log(reducer)
    return (
        <div></div>
    )
}

const MapStateToProps = (state) => ({
    reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(Menu)