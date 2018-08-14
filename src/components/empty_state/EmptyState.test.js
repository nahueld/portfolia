import EmptyState from "./EmptyState";

it("EmptyState", () => {
  const emptyState = shallow(
    <EmptyState title="title" description="description" />
  );
  expect(emptyState.find("h4").text()).to.be.eqls("title");
  expect(emptyState.find("p").text()).to.be.eqls("description");
});
