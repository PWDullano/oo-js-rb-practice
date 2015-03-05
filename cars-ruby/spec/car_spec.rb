require 'spec_helper'
require_relative '../car'

RSpec.describe Car do

  describe "#fill" do
    it "gives the car gas" do
      car = Car.new(10)
      expect(car.gallons).to eq(0)

      car.fill(5)
      expect(car.gallons).to eq(5)

      car.fill(5)
      expect(car.gallons).to eq(10)
    end
  end

  describe "#drive" do
    it "uses gas" do
      car = Car.new(10)
      car.fill(10)
      expect(car.gallons).to eq(10)

      car.drive(50)
      expect(car.gallons).to eq(5)
    end

    it "increments the odometer" do
      car = Car.new(10)
      expect(car.odometer).to eq(0)

      car.drive(50)
      expect(car.odometer).to eq(50)

      car.drive(25)
      expect(car.odometer).to eq(75)
    end

    it "records trips" do
      car = Car.new(10)
      expect(car.trips).to eq([])

      car.drive(50)
      expect(car.trips).to eq([50])

      car.drive(25)
      expect(car.trips).to eq([50, 25])
    end
  end

end
