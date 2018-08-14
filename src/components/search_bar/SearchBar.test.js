import SearchBar from "./SearchBar";

it("SearchBar", () => {
  const config = {
    onSearch: () => {},
    onChange: () => {},
    isLoading: false,
    query: ""
  };
  const wrapper = shallow(<SearchBar {...config} />);
  expect(wrapper).to.exist;
});
