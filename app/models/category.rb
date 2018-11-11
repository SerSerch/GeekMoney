class Category < ApplicationRecord
  has_many :transactions, dependent: :destroy
end
