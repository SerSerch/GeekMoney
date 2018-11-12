class Api::V1::TagsController < ApplicationController
  before_action :authenticate_user!

  def index
    @tags = current_user.tags
    render json: @tags.to_json(
      only: [:name]
    ), status: 200
  end
  
  def create
    if tag_exists?(params[:name])
      render json: {"error": "Tag with this name already exists"}, status: 406
    else
      tag = Tag.create!({
        user: current_user,
        name: params[:name],
      })
      render json: tag.to_json(
        only: [:name]
      ), status: 201
    end
  end

  def update
    unless tag_exists?(params[:name])
      return render json: {"error": "Tag with this name doesn't exists"}, status: 406
    end
    if tag_exists?(params[:new][:name])
      return render json: {"error": "Tag with this name already exists"}, status: 406
    end
    tag = current_user.tags.find_by(name: params[:name])
    @new_tag = params[:new]
    tag.update(tag_params)
    tag.save
    render json: tag.to_json(
      only: [:name]
    ), status: 201
  end

  def destroy
    if tag_exists?(params[:name])
      current_user.tags.find_by(name: params[:name]).destroy!
      render json: {"out": "Tag have been deleted"}, status: 201
    else
      render json: {"error": "Tag with this name doesn't exists"}, status: 406
    end
  end  

  private

  def tag_params
    @new_tag.permit(:name)
  end

  def tag_exists?(name)
    !current_user.tags.where(name: name).empty?
  end

end
