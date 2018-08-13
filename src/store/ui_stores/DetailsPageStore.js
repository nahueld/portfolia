class DetailsPageStore {
  rootStore;
  transportLayer;
  localStorageClient;

  constructor(rootStore, transportLayer, localStorageClient) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
    this.localStorageClient = localStorageClient;
  }

  getSelectedPicture() {
    return this.rootStore.picturesStore.selectedPicture;
  }
}

export default DetailsPageStore;
