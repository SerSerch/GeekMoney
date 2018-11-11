class Account < ApplicationRecord
  belongs_to :user
  belongs_to :currency
  has_many :transactions, dependent: :destroy
end
