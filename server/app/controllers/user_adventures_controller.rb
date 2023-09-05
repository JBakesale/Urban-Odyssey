class UserAdventuresController < ApplicationController
  def index
    @user_adventures = UserAdventure.all
    render json: @user_adventures
  end
end
