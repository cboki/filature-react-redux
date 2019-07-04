class Api::V1::MissionsController < ActionController::Base
  def index
    @missions = Mission.all
    render json: @missions
  end
end
