import FavoritesPage from "./FavoritesPage";
import RootStore from "../../store/RootStore";
import { Provider } from "mobx-react";

it("FavoritesPage renders without crashing", () => {
  const stores = new RootStore();
  const wrapper = mount(
    <Provider {...stores}>
      <FavoritesPage />
    </Provider>
  );
  expect(wrapper).to.exist;
});
