module Api::V1

  class Api::V1::AccountsController < ApplicationController
    before_action :authenticate_user!

    def index
      @accounts = current_user.accounts
      render json: @accounts.to_json(
        only: [:name, :balance]
      )
    end

  end

end
