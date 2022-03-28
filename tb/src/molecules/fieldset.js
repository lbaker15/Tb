import React from 'react';
import { connect } from 'react-redux';
import Text from '../atoms/text';
import ParagraphSection from './paragraph-section';

const Fieldset = ({ text, inputTypes }) => {
    return (
        <fieldset>
            {text &&
                <Text type="h3" text={text} />
            }
            {inputTypes.map(type => {
                return <ParagraphSection inputType={type.type} label={type.label} values={type.values ? type.values : null} />
            })}
        </fieldset>
    )
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Fieldset)