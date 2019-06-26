class PlayersController < ApplicationController
  before_action :set_player, only: [:index, :new, :create]

  def index
    @game = Game.find(params[:game_id])
    @players = Player.where(game: @game)
  end

  def new
    @game = Game.find(params[:game_id])
    @player = Player.new
  end

  def create
    @player = Player.new(player_params)
    @player.game = @game
    @player.save
    redirect_to game_players_path(@game)
  end

  private

  def player_params
    params.require(:player).permit(:first_name, :last_name, :email, :nickname)
  end

  def set_player
    @game = Game.find(params[:game_id])
  end
end
