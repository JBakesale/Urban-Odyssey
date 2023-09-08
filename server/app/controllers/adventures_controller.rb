class AdventuresController < ApplicationController
  def index 
    @adventures = Adventure.all
    render json: @adventures
  end

  def show
    @adventure = Adventure.find(params[:id])
    render json: @adventure
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Adventure not found' }, status: :not_found
  end
end
