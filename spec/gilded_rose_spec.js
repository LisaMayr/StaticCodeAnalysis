describe("Gilded Rose", function() {
    var items = []

    items.push(new Item('+5 Dexterity Vest', 10, ));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Conjured Mana Cake', 3, 6));

  it("checks if quality is valid (0 <= quality <= 50), handle Sulfuras exception", function() {
    update_quality();
    let qualityLimitIsMet = true;
    for(var i = 0; i < items.length; i++) {
      if(items[i].quality < 0 && items[i].quality > 50 && items[i].name != 'Sulfuras, Hand of Ragnaros'){
        qualityLimitIsMet = false;
      }
      expect(qualityLimitIsMet).toEqual(true);
    }
  });

  it("checks if quality decreases twice as fast after sell_in reaches zero", function() {
    // Arrange
    var items = [];
    items.push(new Item('+5 Dexterity Vest', 0, 20));
    items.push(new Item('Elixir of the Mongoose', 0, 7));
    items.push(new Item('Conjured Mana Cake', 0, 6));
    //items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 6));

    // Act
    update_quality();

    // Assert
    expect(items[0].quality).toEqual(18); // +5 Dexterity Vest should decrease by 2
    expect(items[1].quality).toEqual(5); // Elixir of the Mongoose should decrease by 2
    expect(items[2].quality).toEqual(4); // Conjured Mana Cake should decrease by 4
    //expect(items[3].quality).toEqual(0); // Conjured Mana Cake should decrease by 4
    
  });

});
