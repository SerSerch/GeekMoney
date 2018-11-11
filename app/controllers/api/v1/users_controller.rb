class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    render json:
      current_user.to_json(
        only: [:id, :email, :first_name, :last_name],
        include: {

          accounts: {
            only: [:name, :balance],
            include: {

              currency: {
                only: [:char_code, :nominal, :name, :value]
              },

              transactions: {
                only: [:value],
                include: {

                  category: {
                    only: [:name]
                  },

                  tag: {
                    only: [:name]
                  },

                }

              }
            }
          }
        }
      )
  end
      
end