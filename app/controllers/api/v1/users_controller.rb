module Api::V1
  
  class UsersController < ApplicationController
    before_action :authenticate_user!
    respond_to :json

    def index
      @users = User.all.pluck(:email)
      render json: @users
    end

    def show
      # byebug
      # @user = current_user
      render json: User.first
    end

  end

end