import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import Form from './organisms/form';
import ParagraphSection from './molecules/paragraph-section';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './reducers';

const rootReducer = combineReducers({
  reducer: reducer
})
const store = createStore(rootReducer)
const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);
 
// test('invalid form', async () => {
//   render(<Form />, {wrapper: Wrapper});
//   const submit = screen.getByTestId('submit');
//   fireEvent.click(submit)
//   expect(screen.getByTestId('alert')).toBeInTheDocument()
// });

test('valid fields', async () => {
  render(<ParagraphSection label='email' inputType='text' />, {wrapper: Wrapper});
  const input = screen.getByLabelText('Email')
  fireEvent.change(input, {target: {value: '1@email.com'}})
  const p = screen.getByTestId('p');
  expect(p.classList.contains('error')).toBe(false)
});