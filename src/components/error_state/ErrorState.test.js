import ErrorState from "./ErrorState";

it("ErrorState", () => {
  const emptyState = shallow(<ErrorState errors={["err1", "err2"]} />);
  expect(
    emptyState
      .find("li")
      .first()
      .text()
  ).to.be.eqls("err1");
  expect(
    emptyState
      .find("li")
      .last()
      .text()
  ).to.be.eqls("err2");
});
