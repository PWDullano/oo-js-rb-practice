require 'spec_helper'
require_relative '../soda-machine'

RSpec.describe SodaMachine do

  it "has inventory" do
    soda_machine = SodaMachine.new({
      coke: 10,
      sprite: 10,
      dr_pepper: 5,
    })

    expect(soda_machine.inventory(:coke)).to eq(10)
    expect(soda_machine.inventory(:dr_pepper)).to eq(5)
  end

  xit "allows purchases" do
    soda_machine = SodaMachine.new({ coke: 10 })

    soda_machine.purchase(:coke)

    expect(soda_machine.inventory(:coke)).to eq(9)
  end

  xit "shows history" do
    soda_machine = SodaMachine.new({
      coke: 10,
      sprite: 10,
      dr_pepper: 5,
    })
    soda_machine.purchase(:coke)
    soda_machine.purchase(:sprite)
    soda_machine.purchase(:dr_pepper)

    expect(soda_machine.history).to eq([
      "coke purchased",
      "sprite purchased",
      "dr_pepper purchased",
    ])
  end

  xit "allows you to add inventory" do
    soda_machine = SodaMachine.new({
      coke: 10,
      sprite: 10,
      dr_pepper: 5,
    })
    soda_machine.add(:coke, 5)
    expect(soda_machine.inventory(:coke)).to eq(15)
    soda_machine.add(:sprite, 10)
    expect(soda_machine.inventory(:sprite)).to eq(20)
    soda_machine.add(:fresca, 20)
    expect(soda_machine.inventory(:fresca)).to eq(20)
  end

end
