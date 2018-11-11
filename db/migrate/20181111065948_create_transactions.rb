class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.references :account, foreign_key: true, null: false
      t.references :tag, foreign_key: true
      t.references :category, foreign_key: true
      t.decimal :value, null: false, precision: 10, scale: 4

      t.timestamps
    end
  end
end
