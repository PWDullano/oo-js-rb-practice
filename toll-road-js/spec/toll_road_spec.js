var TollRoad = require('../toll_road');

describe("TollRoad", ()=>{

  it("has a price", ()=> {
    var tollRoad = new TollRoad(4);
    expect(tollRoad.price).toEqual(4);

    var moneyBags = new TollRoad(100000);
    expect(moneyBags.price).toEqual(100000);
  });

  // it("charges cars that pass through the toll", ()=> {
  //   var tollRoad = new TollRoad(7);
  //
  //   tollRoad.charge('aaa-bbb', '2014-12-12-08-22');
  //   expect(tollRoad.balance('aaa-bbb')).toEqual(7);
  //
  //   tollRoad.charge('aaa-bbb', '2014-12-12-08-22');
  //   expect(tollRoad.balance('aaa-bbb')).toEqual(14);
  //
  //   tollRoad.charge('ccc-ddd', '2015-12-12-08-22');
  //   expect(tollRoad.balance('ccc-ddd')).toEqual(7);
  // });
  //
  // it("allows customers to pay", ()=> {
  //   var tollRoad = new TollRoad(5);
  //
  //   tollRoad.charge('aaa-bbb', '2015-12-12-08-22');
  //   tollRoad.charge('aaa-bbb', '2015-12-12-08-22');
  //
  //   tollRoad.pay('aaa-bbb', 7);
  //   expect(tollRoad.balance('aaa-bbb')).toEqual(3);
  //
  //   tollRoad.pay('aaa-bbb', 2);
  //   expect(tollRoad.balance('aaa-bbb')).toEqual(1);
  // });
  //
  // it("returns the dates that a given car was charged (most recent first)", ()=> {
  //   var tollRoad = new TollRoad(6);
  //
  //   tollRoad.charge('aaa-bbb', '2015-12-12-08-22');
  //   expect(tollRoad.history('aaa-bbb')).toEqual([
  //     'Charged $0.06 on 2015-12-12-08-22'
  //   ]);
  //
  //   tollRoad.charge('aaa-bbb', '2015-01-05-10-34');
  //   expect(tollRoad.history('aaa-bbb')).toEqual([
  //     'Charged $0.06 on 2015-01-05-10-34',
  //     'Charged $0.06 on 2015-12-12-08-22',
  //   ]);
  // });

});
