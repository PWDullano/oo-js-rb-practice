require 'spec_helper'
require_relative '../robot'

RSpec.describe Robot do

  it "starts off with the given battery power, at position [0,0]" do
    robot = Robot.new(17)
    # robot = Robot.allocate
    # robot.initialize(17)

    expect(robot.position).to eq([0,0])
    expect(robot.battery).to eq(17)

    robot2 = Robot.new(6)
    expect(robot2.battery).to eq(6)
  end

  it "can move up" do
    robot = Robot.new(8)
    robot.move_up
    expect(robot.position).to eq([0, 1])

    robot.move_up
    expect(robot.position).to eq([0, 2])
  end

  it "can move left" do
    robot = Robot.new(8)
    robot.move_left
    expect(robot.position).to eq([-1, 0])

    robot.move_left
    expect(robot.position).to eq([-2, 0])
  end

  it "can record their history" do
    robot = Robot.new(8)
    expect(robot.history).to eq([])

    robot.move_left
    expect(robot.history).to eq([:left])

    robot.move_up
    expect(robot.history).to eq([:left, :up])
  end

end
