import React from 'react';
import { connect } from 'react-redux';
import Text from '../atoms/text';
import ParagraphSection from './paragraph-section';

const Fieldset = ({ text, inputTypes, reducer }) => {
    return (
        <fieldset>
            {text &&
                <Text type="h2" text={text} />
            }
            {inputTypes.map((type, i) => {
                return <ParagraphSection key={'para_section'+i} inputType={type.type} label={type.label} values={type.values ? type.values : null} />
            })}
        </fieldset>
    )
}

const mapStateToProps = (state) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(Fieldset)