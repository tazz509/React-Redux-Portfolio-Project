require 'test_helper'
require "action_controller/railtie"

class RoutesTest < ActionDispatch::IntegrationTest
  test "games_create_test" do
    assert_routing({ path: 'api/v1/game', method: :get }, { format: :json, controller: 'api/v1/games', action: 'create' })
  end
  test "post_high_score" do
    assert_routing({ path: 'api/v1/high_scores', method: :post }, { format: :json, controller: 'api/v1/scores', action: 'create' })
  end
  test "get_high_scores" do
    assert_routing({ path: 'api/v1/high_scores', method: :get }, { format: :json, controller: 'api/v1/scores', action: 'index' })
  end
end
