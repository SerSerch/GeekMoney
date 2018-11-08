class CreateCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :currencies do |t|
      t.with_options null: false, unique: true do
        integer :num_code
        string :char_code
        integer :nominal
        string :name
        decimal :value, precision: 10, scale: 4
      end

      t.timestamps
    end
  end
end
