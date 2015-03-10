require 'spec_helper'
require_relative '../soda-machine'

RSpec.describe SodaMachine do

  it "has inventory" do
    # instantiating SodaMachine
    # pass it a hash an argument
    # say what keys / values are
    # assigning it to the variable soda_machine
    soda_machine = SodaMachine.new({
      coke: 10,
      sprite: 10,
      dr_pepper: 5,
    })

    # calling the inventory method on soda_machine
    # and I'm passing it an argument which is a symbol 'coke'
    expect(soda_machine.inventory(:coke)).to eq(10)
    expect(soda_machine.inventory(:dr_pepper)).to eq(5)
  end

  it "allows purchases" do
    soda_machine = SodaMachine.new({ coke: 10 })

    soda_machine.purchase(:coke)

    expect(soda_machine.inventory(:coke)).to eq(9)
  end

  it "shows history" do
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

end
