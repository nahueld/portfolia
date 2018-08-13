import { getSelectedPicture } from "./CommonActions";

class DetailsPageStore {
  rootStore;
  transportLayer;
  localStorageClient;

  constructor(rootStore, transportLayer, localStorageClient) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
    this.localStorageClient = localStorageClient;
    this.getSelectedPicture = getSelectedPicture(rootStore);
  }
}

export default DetailsPageStore;
