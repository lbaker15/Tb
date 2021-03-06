import logo from './logo.svg';
import './css/index.scss';
import { connect } from 'react-redux';
import Form from './organisms/form';

function App({ reducer }) {
  if (reducer) {
    return (
      <Form />
    )
  } else {
    <div>Loading...</div>
  }
}

const MapStateToProps = (state) => ({
  reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(App)
