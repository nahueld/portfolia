import LocalStorageClient from "./LocalStorageClient"



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

// @ponicode
describe("LocalStorageClient.default", () => {
    test("0", () => {
        let callFunction = () => {
            LocalStorageClient.default("fake_project_id")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            LocalStorageClient.default("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            LocalStorageClient.default("projectId-1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            LocalStorageClient.default("YOUR_PROJECT_ID")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            LocalStorageClient.default(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            LocalStorageClient.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
