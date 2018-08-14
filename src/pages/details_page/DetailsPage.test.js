import DetailsPage from "./DetailsPage";
import RootStore from "../../store/RootStore";
import { Provider } from "mobx-react";

it("DetailsPage renders without crashing", () => {
  const stores = new RootStore();
  const wrapper = mount(
    <Provider {...stores}>
      <DetailsPage />
    </Provider>
  );
  expect(wrapper).to.exist;
});
