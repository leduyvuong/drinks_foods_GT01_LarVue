class Api::V1::UsersController < ApplicationController
  before_action :found_user, only: [:edit, :update, :show, :destory]
  def index
    @users = User.all.paginate(page: params[:page])
    @total = User.all.count
    render json: {lists: @users, totalUser: @total}
  end

  def show
    @user_profile = @user.user_profile
    render json: {user: @user, user_profile: @user_profile}
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

  def update
    if @user.update(user_params)
      render json: {success: true}
    else
      render json: {errors: @user.errors, success: false}
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
    
    def found_user
      @user = User.find_by(id: params[:id])
      if @user
        @user
      else
        render json: {error: "Not found user"}
      end
    end
end
