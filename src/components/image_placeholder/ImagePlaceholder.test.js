import ImagePlaceholder from "./ImagePlaceholder";

it("ImagePlaceholder", () => {
  const wrapper = shallow(
    <ImagePlaceholder>
      <h4>Hello World</h4>
    </ImagePlaceholder>
  );
  expect(wrapper.find("h4").text()).to.be.eqls("Hello World");
});
