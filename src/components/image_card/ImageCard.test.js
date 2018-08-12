import ImageCard from "./ImageCard";

describe("ImageCard", () => {
  let picture, moreDetails, imageCard;

  beforeEach(() => {
    picture = {
      user: {
        name: "John"
      },
      description: "Description",
      urls: {
        thumb: ""
      },
      error: true
    };
    moreDetails = sinon.spy();
    imageCard = shallow(
      <ImageCard picture={picture} moreDetails={moreDetails} />
    );
  });

  it("renders the ImageCard with expected artist name", () => {
    expect(
      imageCard
        .find(".card-title")
        .first()
        .text()
    ).to.be.eqls(picture.user.name);
  });

  it("renders the ImageCard with expected picture description", () => {
    expect(
      imageCard
        .find(".card-text")
        .first()
        .text()
    ).to.be.eqls("Description");
  });

  it("triggers moreDetails when 'more' is clicked", () => {
    imageCard
      .find(".btn.btn-link")
      .first()
      .simulate("click");
    expect(moreDetails).to.have.property("callCount", 1);
  });
});
