class Api::V1::SessionsController < ApplicationController
  def new
    if logged_in?
      redirect_to home_path
    end
  end
  def create
    @user = User.find_by(email: user_params[:username])
    if @user && @user.authenticate(user_params[:password])
      render json: {
        user: @user,
        login: true
      }
    else
      render json: {
        login: false
      }
    end
  end
  def destroy
    log_out
    redirect_to root_path
  end
  private
    def user_params
      params.require(:user).permit(:username, :password)
    end 
end
