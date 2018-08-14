import Pagination from "./Pagination";

it("Pagination with all buttons present", () => {
  const onPrevClick = sinon.spy();
  const onPageClick = sinon.spy();
  const onNextClick = sinon.spy();
  const wrapper = shallow(
    <Pagination
      totalPages={10}
      currentPage={2}
      onPrevClick={onPrevClick}
      onPageClick={onPageClick}
      onNextClick={onNextClick}
      isLoading={false}
    />
  );

  expect(wrapper.find(".prev-btn")).to.exist;
  wrapper.find(".page-btn").forEach((n, idx) => {
    switch (idx) {
      case 0:
        expect(n.text()).to.be.eqls("1");
        return;
      case 1:
        expect(n.text()).to.be.eqls("2");
        expect(n.hasClass("active")).to.be.true;
        return;
      default:
        expect(n.text()).to.be.eqls("3");
    }
  });

  expect(wrapper.find(".next-btn")).to.exist;
});
