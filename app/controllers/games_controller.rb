class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    @game = Game.create(game_params)
    redirect_to game_players_path(@game)
  end

  def show
  end

  private

  def game_params
    params.require(:game).permit(:name)
  end
end
