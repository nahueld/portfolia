import App from "./App";

it("renders without crashing", () => {
  const wrapper = mount(<App />);
  expect(wrapper).to.exist;
});
