describe("Az app.js tesztjei", () => {
  it("Bemenet 30, 35; Kimenet 525", () => {
    let actual = calcTriangleArea(30, 35);
    expect(actual).toBe(525);
  });

  it("Bemenet 100, 130; Kimenet 6500", () => {
    let actual = calcTriangleArea(100, 130);
    expect(actual).toBe(6500);
  });

  it("Bemenet 1, 3; Kimenet 1.5", () => {
    let actual = calcTriangleArea(1, 3);
    expect(actual).toBe(1.5);
  });
});

describe("Bevitel elenőrzésének tesztelése", () => {
  it('Az "a" bemenetre null-t várunk', () => {
    let actual = checkInput("a");
    expect(actual).toBeNull();
  });

  it('A "cica" bemenetre null-t várunk', () => {
    let actual = checkInput("cica");
    expect(actual).toBeNull();
  });

  it('A 33 bemenetre null-t várunk', () => {
    let actual = checkInput("33");
    expect(actual).not.toBeNull();
  });
});
