module Api::V1

  class Api::V1::CurrenciesController < ApplicationController
    before_action :authenticate_user!

    def index
      @currencies = Currency.all
      render json: @currencies.to_json(
        only: [:char_code, :nominal, :name, :value]
      )
    end

  end

end
