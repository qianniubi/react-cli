// import 'antd-mobile/dist/antd-mobile.css';
import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'reset.less';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import QYFRoute from './route/QYFRoute';
import Store from './stores';

const stores = new Store();

ReactDOM.render(
  (
    <BrowserRouter>
      <Provider store={stores}>
      <QYFRoute />
      </Provider>
    </BrowserRouter>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
