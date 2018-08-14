import LocalStorageClient from "./LocalStorageClient";

describe("LocalStorageClient", () => {
  let client = {
    setItem: sinon.spy(),
    removeItem: sinon.spy(),
    getItem: id =>
      id == "portfolia-1" || id == "portfolia-2"
        ? `{ "id": "${id.split("-")[1]}" }`
        : null,
    "portfolia-1": {
      id: "1"
    },
    "portfolia-2": {
      id: "2"
    }
  };

  it("save", () => {
    LocalStorageClient(client).save({ id: "1" });
    expect(client.setItem.args[0]).to.be.eqls(["portfolia-1", '{"id":"1"}']);
  });

  it("remove", () => {
    LocalStorageClient(client).remove("1");
    expect(client.removeItem.args[0]).to.be.eqls(["portfolia-1"]);
  });

  it("read", () => {
    const res = LocalStorageClient(client).read("1");
    expect(res).to.be.eqls({ id: "1" });
  });

  it("readAll", () => {
    const res = LocalStorageClient(client).readAll();
    expect(res).to.be.eqls([{ id: "1" }, { id: "2" }]);
  });
});
