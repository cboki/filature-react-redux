class Api::V1::PositionsController < ActionController::Base
  before_action :find_game, only: [ :index, :last, :random ]
  def index
    @positions = Position.where(game: @game)
    render json: @positions
  end

  def last
    @position = Position.where(game: @game).last
    render json: @position
  end

  # POUR TEST ET DEVELOPPEMENT
  def random
    @position = Position.where(game: @game).order("RANDOM()").first
    render json: @position
  end

  private

  def find_game
    @game = Game.find(params[:game_id])
  end
end
