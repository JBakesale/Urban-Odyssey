class AdventuresController < ApplicationController
  def index 
    @adventures = Adventure.all
    render json: @adventures
  end
end
