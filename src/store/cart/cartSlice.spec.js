import cartReducer, { addItem, removeItem } from "./cartSlice";

describe("cart reducer", () => {
  const initialState = {
    items: [],
    total: 0,
    discountTotal: 0,
    count: 0,
    loading: false,
  };

  const testItemNoDiscount = {
    id: 3,
    name: "Test Product no discount",
    price: 5,
  };
  const testItemDiscount = {
    id: 4,
    name: "Test Product no discount",
    price: 5,
    hasDiscount: true,
    discountPrice: 2,
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      items: [],
      total: 0,
      discountTotal: 0,
      count: 0,
      loading: false,
    });
  });

  it("should calculate total currectly for 1 added item", () => {
    const actual = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 1 })
    );
    expect(actual.total).toEqual(testItemNoDiscount.price);
  });

  it("should calculate total currectly for 1 removed item", () => {
    let draft = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 1 })
    );
    const actual = cartReducer(
      draft,
      removeItem({ item: testItemNoDiscount, amount: -3 })
    );
    expect(actual.total).toEqual(0);
  });

  it("should calculate total currectly for 5 added items and 2 removed", () => {
    const draft = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 5 })
    );
    const actual = cartReducer(
      draft,
      removeItem({ item: testItemNoDiscount, amount: -2 })
    );
    expect(actual.total).toEqual(3 * testItemNoDiscount.price);
  });

  it("should calculate total currectly for 5 added items without discount", () => {
    const actual = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 5 })
    );
    expect(actual.discountTotal).toEqual(0);
  });

  it("should calculate discount total currectly for 5 added items with discount", () => {
    const actual = cartReducer(
      initialState,
      addItem({ item: testItemDiscount, amount: 5 })
    );
    expect(actual.discountTotal).toEqual(
      5 * (testItemDiscount.price - testItemDiscount.discountPrice)
    );
    expect(actual.total).toEqual(5 * testItemDiscount.price);
  });

  it("should have correct count on add", () => {
    let draft = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 3 })
    );
    const actual = cartReducer(
      draft,
      addItem({ item: testItemDiscount, amount: 2 })
    );

    expect(actual.count).toEqual(5);
  });

  it("should have correct count on remove", () => {
    let draft = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 3 })
    );
    draft = cartReducer(draft, addItem({ item: testItemDiscount, amount: 2 }));
    let actual = cartReducer(
      draft,
      removeItem({ item: testItemNoDiscount, amount: -2 })
    );

    expect(actual.count).toEqual(3);
  });

  it("should not add item again when it is in array", () => {
    let draft = cartReducer(
      initialState,
      addItem({ item: testItemNoDiscount, amount: 3 })
    );
    draft = cartReducer(draft, addItem({ item: testItemNoDiscount }));
    const actual = cartReducer(draft, addItem({ item: testItemDiscount }));

    expect(actual.items.length).toEqual(2);
  });
});
