import React from 'react';
import './App.scss';

// component imports
import Home from './components/layout/Home';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
