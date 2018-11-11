class Tag < ApplicationRecord
  has_many :transactions, dependent: :destroy
end
