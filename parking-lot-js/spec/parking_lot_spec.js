var ParkingLot = require('../parking_lot');

describe('ParkingLot', ()=> {

  describe("#vacancies", ()=> {
    it("starts off as the number of spaces", ()=> {
      var parkingLot = new ParkingLot(7);
      expect(parkingLot.vacancies()).toEqual(7);

      parkingLot = new ParkingLot(12);
      expect(parkingLot.vacancies()).toEqual(12);
    });
  });

  // describe("#park", function() {
  //   it("records that a car with the given license plate was parked and decreases vacancies", function() {
  //     var parkingLot = new ParkingLot(7);
  //
  //     parkingLot.park('aaa-123');
  //     expect(parkingLot.locationOf('aaa-123')).toEqual(0);
  //     expect(parkingLot.vacancies()).toEqual(6);
  //
  //     parkingLot.park('bbb-456');
  //     expect(parkingLot.locationOf('bbb-456')).toEqual(1);
  //     expect(parkingLot.vacancies()).toEqual(5);
  //   });
  //
  //   it("fills in empty spaces first", function() {
  //     var parkingLot = new ParkingLot(7);
  //
  //     parkingLot.park('aaa-123');
  //     parkingLot.park('bbb-456'); // this one will leave
  //     parkingLot.park('ccc-789');
  //
  //     parkingLot.leave('bbb-456');
  //     parkingLot.park('ddd-321');
  //
  //     expect(parkingLot.locationOf('ddd-321')).toEqual(1);
  //   });
  // });

});
