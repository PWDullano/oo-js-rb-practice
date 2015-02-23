# class Robot
#
#   attr_reader :battery, :position, :history
#
#   def initialize(battery)
#     @battery = battery
#     @position = [0, 0]
#     @history = []
#   end
#
#   def move_up
#     move(0, 1, :up)
#   end
#
#   def move_down
#     move(0, -1, :down)
#   end
#
#   def move_left
#     move(-1, 0, :left)
#   end
#
#   private
#
#   def move(x, y, direction)
#     @position[0] += x
#     @position[1] += y
#     @history << direction
#     @battery -= 1
#   end
#
# end
