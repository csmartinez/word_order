describe('wordOrder', function() {
  it("outputs an array", function() {
    expect(wordOrder("")).to.eql([]);
  });

  it("outputs one word", function() {
    expect(wordOrder("chocolate")).to.eql(["chocolate"]);
  });

  it("doesn't return duplicates", function() {
    expect(wordOrder("chocolate chocolate strawberry")).to.eql(["chocolate", "strawberry"]);
  });

  it("returns most frequent word at index 0", function() {
    expect(wordOrder("chocolate chocolate chocolate peanut butter butter")).to.eql(["chocolate", "butter", "peanut"]);
  });

  it("returns words by order of occurance", function() {
    expect(wordOrder("Hear ye hear ye Hear ye hear ye America is near ye!")).to.eql(["ye", "Hear", "hear", "America", "is", "near", "ye!"]);
  });
});
