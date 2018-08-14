import PictureDetails from "./PictureDetails";

it("PictureDetails", () => {
  const picture = {
    user: {
      name: "John",
      location: "Australia",
      bio: "What's up"
    },
    urls: {
      regular: "regular"
    }
  };
  const wrapper = shallow(<PictureDetails picture={picture} />);

  expect(wrapper.find("img").prop("src")).to.be.eqls("regular");
  expect(wrapper.find(".card-title").text()).to.be.eqls("John");
  expect(
    wrapper
      .find(".card-text.bg-dark")
      .first()
      .text()
  ).to.be.eqls("Australia");
  expect(
    wrapper
      .find(".card-text.bg-dark")
      .last()
      .text()
  ).to.be.eqls("What's up");
});
