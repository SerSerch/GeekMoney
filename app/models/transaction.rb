class Transaction < ApplicationRecord
  belongs_to :account
  belongs_to :tag, optional: true
  belongs_to :category
end
