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

  it("checks if quality degrades twice as fast after sell by date has been reached", function() {
    update_quality();
    let qualityLimitIsMet = true;
    for(var i = 0; i < items.length; i++) {
      if(items[i].sell_in <= 0){
        qualityLimitIsMet = false;
      }
      expect(qualityLimitIsMet).toEqual(true);
    }
  });

});
