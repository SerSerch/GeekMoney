class Api::V1::CategoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = current_user.categories
    render json: @categories.to_json(
      only: [:name]
    ), status: 200
  end
  
  def create
    if category_exists?(params[:name])
      render json: {"error": "Category with this name already exists"}, status: 406
    else
      category = Category.create!({
        user: current_user,
        name: params[:name],
      })
      render json: category.to_json(
        only: [:name]
      ), status: 201
    end
  end

  def update
    unless category_exists?(params[:name])
      return render json: {"error": "Category with this name doesn't exists"}, status: 406
    end
    if category_exists?(params[:new][:name])
      return render json: {"error": "Category with this name already exists"}, status: 406
    end
    category = current_user.categories.find_by(name: params[:name])
    @new_category = params[:new]
    category.update(category_params)
    category.save
    render json: category.to_json(
      only: [:name]
    ), status: 201
  end

  def destroy
    if category_exists?(params[:name])
      current_user.categories.find_by(name: params[:name]).destroy!
      render json: {"out": "Category have been deleted"}, status: 201
    else
      render json: {"error": "Category with this name doesn't exists"}, status: 406
    end
  end  

  private

  def category_params
    @new_category.permit(:name)
  end

  def category_exists?(name)
    !current_user.categories.where(name: name).empty?
  end

end
