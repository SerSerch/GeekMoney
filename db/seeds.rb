# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'net/http'

User.destroy_all

user_num = 0
hash_users = 20.times.map do 
  {
    email: "test#{user_num += 1}@test.ru",
    password: "111111",
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name
  }
end
users = User.create! hash_users

# Get current curriences from the CBR
url = "https://www.cbr-xml-daily.ru/daily_json.js"
response = Net::HTTP.get_response(URI.parse(url))
data = JSON.parse(response.body)
valutes = data["Valute"]

currency_hashes = []
valutes.each do |key, value|
  currency_hashes << { 
    num_code: value["NumCode"],
    char_code: value["CharCode"],
    nominal: value["Nominal"],
    name: value["Name"],
    value: value["Value"]
  }    
end

Currency.destroy_all
Currency.create! currency_hashes

# Create users accounts
Account.destroy_all

accounts = [
  "Дебетовая Сбербанк",
  "Кредитная Сбербанк",
  "Дебетовая Альфа",
  "Кредитная Альфа",
  "Дебетовая Тиньков",
  "Кредитная Тиньков",
  "Дебетовая ВТБ",
  "Кредитная ВТБ",
  "Наличка под подушкой",
  "Наличка в кармане"
]
users_count = User.count
hash_accounts = users_count.times.map do |i|
  user_hash = rand(5).times.map do
    {
      user_id: User.offset(i).limit(1).pluck(:id)[0],
      currency_id: Currency.all.sample.id,
      name: accounts.sample,
      balance: rand(100.01..1000000.999)
    }
  end
end
Account.create! hash_accounts