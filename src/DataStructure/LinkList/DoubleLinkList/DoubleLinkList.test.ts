import { DoubleLinkList } from "./DoubleLinkList";

describe("SingleLinkList", () => {
  let list: DoubleLinkList<number | string>;

  beforeEach(() => {
    list = new DoubleLinkList<number | string>();
    list.add("a");
    list.add("b");
    list.add("c");
  });

  it("add should correctly", function () {
    expect(list).toMatchSnapshot();
    expect(list.length).toBe(3);
  });

  it("头插入 应该正确", function () {
    list.inset("0a", 0);
    expect(list).toMatchSnapshot();
  });

  it("指定index插入", function () {
    list.inset("1a", 1);
    expect(list).toMatchSnapshot();
    list.inset("0b", 2);
    expect(list).toMatchSnapshot();
  });
});
