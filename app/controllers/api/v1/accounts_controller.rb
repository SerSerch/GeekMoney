class Api::V1::AccountsController < ApplicationController
  before_action :authenticate_user!

  def index
    @accounts = current_user.accounts
    render json: @accounts.to_json(
      only: [:name, :balance]
    )
  end

  def create
    if account_exists?(params[:name])
      render json: {"error": "Account with this name already exists"}
    else
      account = Account.create!({
        user: current_user,
        name: params[:name],
        currency: params[:currency] ? params[:currency] : Currency.find_by(char_code: "USD"),
        balance: 0
      })
      render json: account.to_json(
        only: [:name, :balance]
      )
    end
  end

  def update
    unless account_exists?(params[:name])
      return render json: {"error": "Account with this name doesn't exists"}
    end
    if account_exists?(params[:new][:name])
      return render json: {"error": "Account with this name already exists"}
    end
    account = current_user.accounts.find_by(name: params[:name])
    @new_account = params[:new]
    account.update(account_params)
    account.save
    render json: {"out": "Account have been updated"}
  end

  def destroy
    if account_exists?(params[:name])
      current_user.accounts.find_by(name: params[:name]).destroy!
      render json: {"out": "Account have been deleted"}
    else
      render json: {"error": "Account with this name doesn't exists"}
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
