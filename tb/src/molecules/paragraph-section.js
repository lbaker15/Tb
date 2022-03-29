import React from 'react';
import { connect } from 'react-redux';
import Input from '../atoms/input';
import Select from '../atoms/select';
import Label from '../atoms/label';
import Submit from '../atoms/submit';

const ParagraphSection = ({ label, inputType, values, reducer }) => {
    if (reducer) {
        if (inputType === 'checkbox') {
            return (
                <p
                    className={(reducer[label]) ? reducer[label].valid ? 'input-parent' : 'error input-parent' : 'input-parent'}
                >
                
                    <Label label="animal" string={label} />
                    {values.map((value, i) => {
                        return (
                            <React.Fragment key={'animal_label' + i}>
                                 <div className='input-parent__inner'>
                                <Input type='checkbox' name={label} value={value} id={value} />
                                <label htmlFor={value}>{value}</label>
                                </div>
                            </React.Fragment>
                        )
                    })}
                  
                </p>
            )
        } else {
            return (
                <p data-testid="p" className={(reducer[label]) ? reducer[label].valid ? 'input-parent' : 'input-parent error' : 'input-parent'}>
                    {label ?
                        (label === 'tiger_type') ?
                            (reducer.animal.array.includes('tiger')) ?
                                <Label
                                    label={label}
                                    string={'Type of tiger'}
                                />
                                :
                                null
                            :
                            <Label
                                label={label}
                                string={label}
                            />
                        : null
                    }
                    {inputType === 'text' &&
                        <Input type='text' id={label} name={label} />
                    }
                    {inputType === 'password' &&
                        <Input className="error" type="password" id={label} name='username' />
                    }
                    {inputType === 'select' &&
                        <Select label={label} values={values} />
                    }
                    {inputType === 'submit' &&
                        <Submit />
                    }
                </p>
            )
        }
    } else {
        return <div>Loading</div>
    }
}

const mapStateToProps = (state) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(ParagraphSection)