import { Button } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { getFetch } from './../../api/index';
import Base from './../../base/Base';
import './index.less';

@inject('store')
@observer
export default class DownloadApp extends Base {
  constructor(props: any) {
    super(props);
    
  }
  public async componentDidMount() {
    const dataSource = await getFetch({
      url: 'homekv'
    })
    // tslint:disable-next-line:no-console
    console.log(dataSource)
  }
  public render() {
    return (
      <div className="DownloadApp">
        <Button className="downloadBtn" type="primary">下载</Button>
      </div>
    );
  }
}
