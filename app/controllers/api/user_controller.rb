class Api::UserController < ApplicationController
  def index
    render json: User.all
  end

  def get_user(id)
    user = User.find(params[:id])
    render json: user
  end
  
  def show
  end
end
