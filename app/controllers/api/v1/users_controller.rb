module Api::V1
  
  class UsersController < ApplicationController
    before_action :authenticate_user!

    def index
      @users = User.all.pluck(:email)
      render json: @users
    end

    def show
      render json: User.find(current_user.id)
    end

  end

end