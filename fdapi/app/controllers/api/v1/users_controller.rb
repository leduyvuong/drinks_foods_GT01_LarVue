class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.create_user_profile(name: params[:full_name])
      render json: {
        status: :create,
        user: @user,
        succes: true
      }
    else
      render json: @user.errors
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
    
end
