var ParkingLot = require('../parking_lot');

describe('ParkingLot', ()=> {

  it("starts off with vacancies", ()=> {
    var parkingLot = new ParkingLot(7);
    expect(parkingLot.vacancies()).toEqual(7);

    parkingLot = new ParkingLot(12);
    expect(parkingLot.vacancies()).toEqual(12);
  });

  // it("records that a car with the given license plate was parked and decreases vacancies", function() {
  //   var parkingLot = new ParkingLot(7);
  //
  //   parkingLot.park('aaa-123');
  //   expect(parkingLot.locationOf('aaa-123')).toEqual(1);
  //   expect(parkingLot.vacancies()).toEqual(6);
  //
  //   parkingLot.park('bbb-456');
  //   expect(parkingLot.locationOf('bbb-456')).toEqual(2);
  //   expect(parkingLot.vacancies()).toEqual(5);
  // });
  //
  // it("fills in empty spaces first", function() {
  //   var parkingLot = new ParkingLot(7);
  //
  //   parkingLot.park('aaa-123');
  //   parkingLot.park('bbb-456'); // this one will leave
  //   parkingLot.park('ccc-789');
  //
  //   parkingLot.leave('bbb-456');
  //   expect(parkingLot.locationOf('bbb-456')).toEqual(undefined);
  //   expect(parkingLot.vacancies()).toEqual(5);
  //
  //   parkingLot.park('ddd-321');
  //   expect(parkingLot.locationOf('ddd-321')).toEqual(2);
  //
  //   parkingLot.park('eee-555');
  //   expect(parkingLot.locationOf('eee-555')).toEqual(4);
  // });
  //
  // it("can print the location of all cars", function() {
  //   var parkingLot = new ParkingLot(7);
  //
  //   parkingLot.park('aaa-123');
  //   parkingLot.park('bbb-456');
  //   parkingLot.park('ccc-789');
  //
  //   expect(parkingLot.summary()).toEqual([
  //     "Position 1: aaa-123",
  //     "Position 2: bbb-456",
  //     "Position 3: ccc-789",
  //     "Position 4: (empty)",
  //     "Position 5: (empty)",
  //     "Position 6: (empty)",
  //     "Position 7: (empty)",
  //   ]);
  // });
  //
  // it("can compact cars in the lot", function() {
  //   var parkingLot = new ParkingLot(8);
  //
  //   parkingLot.park('aaa-123');
  //   parkingLot.park('bbb-123');
  //   parkingLot.park('ccc-123');
  //   parkingLot.park('ddd-123');
  //   parkingLot.park('eee-123');
  //   parkingLot.park('fff-123');
  //   parkingLot.park('ggg-123');
  //   parkingLot.park('hhh-123');
  //
  //   parkingLot.leave('bbb-123');
  //   parkingLot.leave('ddd-123');
  //   parkingLot.leave('fff-123');
  //   parkingLot.leave('ggg-123');
  //
  //   expect(parkingLot.summary()).toEqual([
  //     "Position 1: aaa-123",
  //     "Position 2: (empty)",
  //     "Position 3: ccc-123",
  //     "Position 4: (empty)",
  //     "Position 5: eee-123",
  //     "Position 6: (empty)",
  //     "Position 7: (empty)",
  //     "Position 8: hhh-123",
  //   ]);
  //
  //   parkingLot.compact();
  //
  //   expect(parkingLot.summary()).toEqual([
  //     "Position 1: aaa-123",
  //     "Position 2: hhh-123",
  //     "Position 3: ccc-123",
  //     "Position 4: eee-123",
  //     "Position 5: (empty)",
  //     "Position 6: (empty)",
  //     "Position 7: (empty)",
  //     "Position 8: (empty)",
  //   ]);
  // });

});
