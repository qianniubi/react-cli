
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DownloadApp from '../page/DownloadApp';
import Du from '../page/Du';
import Test from '../page/Test';

export default class QYFRoute extends React.Component<{}> {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/test' component={Test} />
          <Route path='/downloadApp' component={DownloadApp} />
          <Route path='/du' component={Du} />

          <Redirect to='/test' />
        </Switch>
      </div>
    );
  }
}
