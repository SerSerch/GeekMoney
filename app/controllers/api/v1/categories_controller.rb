class Api::V1::CategoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = current_user.cate
    render json: @accounts.to_json(
      only: [:name, :balance]
    ), status: 200
  end

end
