module Api::V1
  
  class UsersController < ApplicationController
    before_action :authenticate_user!

    def index
      # @users = User.all.pluck(:email)
      # render json: @users
    end

    def show
      render json: current_user.to_json(only: [:id, :email, :first_name, :last_name])
    end

  end

end