class Api::V1::AccountsController < ApplicationController
  before_action :authenticate_user!

  def index
    @accounts = current_user.accounts
    render json: @accounts.to_json(
      only: [:name, :balance]
    ), status: 200
  end

  def create
    if account_exists?(params[:name])
      render json: {"error": "Account with this name already exists"}, status: 406
    else
      account = Account.create!({
        user: current_user,
        name: params[:name],
        currency: params[:currency] ? params[:currency] : Currency.find_by(char_code: "USD"),
        balance: 0
      })
      render json: account.to_json(
        only: [:name, :balance]
      ), status: 201
    end
  end

  def update
    unless account_exists?(params[:name])
      return render json: {"error": "Account with this name doesn't exists"}, status: 406
    end
    if account_exists?(params[:new][:name])
      return render json: {"error": "Account with this name already exists"}, status: 406
    end
    account = current_user.accounts.find_by(name: params[:name])
    @new_account = params[:new]
    account.update(account_params)
    account.save
    render json: {"out": "Account have been updated"}, status: 201
  end

  def destroy
    if account_exists?(params[:name])
      current_user.accounts.find_by(name: params[:name]).destroy!
      render json: {"out": "Account have been deleted"}, status: 201
    else
      render json: {"error": "Account with this name doesn't exists"}, status: 406
    end
  end

  private

  def account_params
    @new_account.permit(:name, :balance)
  end

  def account_exists?(name)
    !current_user.accounts.where(name: name).empty?
  end

end
