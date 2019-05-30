class Api::V1::GamesController < ApplicationController
  def create
    game = Game.new()
    #binding.pry
    render json: game
  end
end