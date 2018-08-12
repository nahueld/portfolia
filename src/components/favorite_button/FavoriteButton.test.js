import FavoriteButton from "./FavoriteButton";

describe("FavoriteButton is favorite", () => {
  let makeUnfavorite, favoriteButton;

  beforeEach(() => {
    makeUnfavorite = sinon.spy();
    favoriteButton = shallow(
      <FavoriteButton isFavorite={true} makeUnfavorite={makeUnfavorite} />
    );
  });

  it("renders selected status", () => {
    expect(favoriteButton.find("fa-heart text-danger")).to.exist;
  });

  it("triggers makeUnfavorite when clicked", () => {
    favoriteButton.find("i").simulate("click");
    expect(makeUnfavorite).to.have.property("callCount", 1);
  });
});

describe("FavoriteButton is not favorite", () => {
  let makeFavorite, favoriteButton;

  beforeEach(() => {
    makeFavorite = sinon.spy();
    favoriteButton = shallow(
      <FavoriteButton isFavorite={false} makeFavorite={makeFavorite} />
    );
  });

  it("renders selected status", () => {
    expect(favoriteButton.find("fa-heart-o text-dark")).to.exist;
  });

  it("triggers makeFavorite when clicked", () => {
    favoriteButton.find("i").simulate("click");
    expect(makeFavorite).to.have.property("callCount", 1);
  });
});
