describe("index.js", () => {
  it("precioBitcoin incrementa 1", () => {
    expect(precioBitcoin).to.equal(67345);
  });

  it("precioEthereum disminuye 1", () => {
    expect(precioEthereum).to.equal(4751);
  });

  it("precioDogecoin incrementa 0.50", () => {
    expect(precioDogecoin).to.equal(0.7748999999999999);
  });
});
