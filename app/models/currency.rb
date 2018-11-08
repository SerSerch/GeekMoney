class Currency < ApplicationRecord
  has_many :accounts, dependent: :destroy
  
end
