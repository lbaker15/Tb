import logo from './logo.svg';
import './css/index.scss';
import Menu from './organisms/menu';
import Toggle from './organisms/toggle';
import { connect } from 'react-redux';

function App({reducer}) {
  const {menu_state} = reducer;
  return (
    <div>
      <Toggle />
      <Menu />
    </div>
  );
}

const MapStateToProps = (state) => ({
  reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(App)
