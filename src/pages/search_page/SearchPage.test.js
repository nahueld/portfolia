import SearchPage from "./SearchPage";
import RootStore from "../../store/RootStore";
import { Provider } from "mobx-react";

it("SearchPage renders without crashing", () => {
  const stores = new RootStore();
  const wrapper = mount(
    <Provider {...stores}>
      <SearchPage />
    </Provider>
  );
  expect(wrapper).to.exist;
});
