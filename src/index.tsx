import React from 'react';
import ReactDOM from 'react-dom';

import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './components/GlobalStyle';

const App = (
  <>
    <Dashboard />
    <GlobalStyle />
  </>
);

ReactDOM.render(App, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/Dashboard', () => {
    const HotApp = (
      <>
        <Dashboard />
        <GlobalStyle />
      </>
    );
    ReactDOM.render(HotApp, document.getElementById('root'));
  });
}
