import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/Dashboard', () => {
    ReactDOM.render(<Dashboard />, document.getElementById('root'));
  });
}
