require 'test_helper'

class GameTest < ActiveSupport::TestCase
  class InitializationTest < ActiveSupport::TestCase
    test "creates a game with a solution array of size 81" do
      game = Game.new()
      assert_equal(game.solution.length, 81)
    end
    
    test "creates a game with a start array of size 81" do
      game = Game.new()
      assert_equal(game.start.length, 81)
    end
    
    test "creates a game with a solution array containing 81 non-nil values" do
      game = Game.new()
      assert_equal(game.solution.count{|s| s != nil}, 81)
    end
    
    test "creates a game with a start array containing 29 non-nil values" do
      game = Game.new()
      assert_equal(game.start.count{|s| s != nil}, 29)
    end
    
    test "each solution has exactly 9 values of each 1-9 integer" do
      game = Game.new()
      for i in 1..9
        assert_equal(9, game.solution.count{|s| s == i})
      end
      
    end
  end
end
