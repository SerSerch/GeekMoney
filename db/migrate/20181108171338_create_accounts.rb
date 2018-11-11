class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.references :user, foreign_key: true, null: false
      t.references :currency, foreign_key: true, null: false
      t.string :name, null: false
      t.decimal :balance, precision: 10, scale: 4

      t.timestamps
    end
  end
end
