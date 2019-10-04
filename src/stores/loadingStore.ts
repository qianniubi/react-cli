import { action, observable } from 'mobx'

class LoadingStore {

  @observable public loadingStore: boolean;
  constructor() {
    this.loadingStore = false;
  }
  @action
  public hideLoading = () => {
    this.loadingStore = false;
  }

  @action
  public showLoading = () => {
    this.loadingStore = true;
  }

}

export default LoadingStore;
