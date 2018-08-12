import LazyImage from "./LazyImage";

describe("LazyImage", () => {
  it("doesn't render image due to an error", () => {
    const wrapper = shallow(<LazyImage />);
    expect(wrapper.find("h1").text()).to.be.eqls("it broke ;(");
  });

  describe("Render a picture", () => {
    let picture = {
      error: false
    };
    let src = "some-url";
    let imageClass = "some-class";
    const wrapper = shallow(
      <LazyImage picture={picture} src={src} imageClass={imageClass} />
    );

    it("renders img with valid class", () => {
      expect(
        wrapper
          .find("LazyLoad")
          .children()
          .hasClass("some-class")
      ).to.be.true;
    });

    it("renders img with valid src", () => {
      expect(
        wrapper
          .find("LazyLoad")
          .children()
          .prop("src")
      ).to.be.eqls("some-url");
    });

    it("renders placeholder while loading", () => {
      expect(wrapper.find(".fa-spin")).to.exist;
    });
  });
});
