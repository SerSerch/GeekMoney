class Api::V1::TransactionsController < ApplicationController
  before_action :authenticate_user!

  def index
    # byebug
    @transactions = current_user.transactions
    render json: @transactions.to_json(
      only: [:id, :value],
      include: {
        account: {
          only: [:name]
        },
        tag: {
          only: [:name]
        }
      }
    )
  end

  def create
    if account_exists?(params[:account])
      return render json: {"error": "Account with this name doesn't exists"}, status: 406
    end
    if category_exists?(params[:category])
      return render json: {"error": "Category with this name doesn't exists"}, status: 406
    end
    tag_exists?(params[:tag])
    account = current_user.accounts.find_by(name: params[:account])

    transaction = Transaction.create!({
      account: account,
      category: current_user.categories.find_by(name: params[:category]),
      value: params[:value]
    }.merge(params[:tag] ? {tag: current_user.tags.find_by(name: params[:tag])} : {}))

    account.update(balance: account[:balance] + params[:value])
    account.save

    render json: transaction.to_json(
      only: [:id, :value]
    ), status: 201
  end

  def update
    transaction = current_user.transactions.find(params[:id])
    unless transaction
      return render json: {"error": "Transaction with this id doesn't exists"}, status: 406
    end

    prev_value = transaction[:value]
    transaction.update!(value: params[:value])

    account = transaction.account
    account.update!(balance: account[:balance] + params[:value] - prev_value)

    render json: transaction.to_json(
      only: [:id, :value]
    ), status: 201
  end

  def destroy
    transaction = current_user.transactions.find(params[:id])
    unless transaction
      return render json: {"error": "Transaction with this id doesn't exists"}, status: 406
    end

    account = transaction.account
    
    prev_value = transaction[:value]
    transaction.destroy!

    account.update!(balance: account[:balance] - prev_value)

    render json: {"out": "Transaction have been deleted"}, status: 201
  end

  private

  def transaction_params
    @new_tag.permit(:account, :category, :tag, :value)
  end

  def account_exists?(name)
    current_user.accounts.where(name: name).empty?
  end

  def category_exists?(name)
    current_user.categories.where(name: name).empty?
  end

  def tag_exists?(name)
    Tag.create(name: name, user: current_user) if current_user.tags.where(name: name).empty?
  end

end
