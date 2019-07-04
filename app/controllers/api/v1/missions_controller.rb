class Api::V1::PositionsController < ActionController::Base
  def index
    @missions = Mission.all
    render json: @missions
  end
end
