import React from 'react';
import { connect } from 'react-redux';
import Text from '../atoms/text';
import Fieldset from '../molecules/fieldset';

let colors = ['blue', 'green', 'red', 'black', 'brown']
let animals = ['bear', 'tiger', 'snake', 'donkey']

const Form = () => {
    return (
        <form method='post' action=''>
            <Text type="h1" text="Fill out this awesome form" />
            <Fieldset text="Your details" inputTypes={[{type: 'text', label: 'email'}, {type: 'password', label: 'password'}]} />
            <Fieldset text="Your animal" inputTypes={[{type: 'select', label: 'colour', values: colors}, {type: 'checkbox', label: 'animal', values: animals}, {type: 'text', label: 'tiger_type'}]}  />
            <Fieldset inputTypes={[{type: 'submit'}]} />
        </form>
    )
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Form)