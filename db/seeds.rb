require 'net/http'

# Create users

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

hash_accounts = []
 User.all.each do |user|
  rand(1..7).times do
    hash_accounts << {
      user: user,
      currency: Currency.all.sample,
      name: accounts.sample,
      balance: rand(100.01..1000000.999)
    }
  end
end

Account.create! hash_accounts


# Create categories

Category.destroy_all

categories = [
  "Обеды, перекусы",
  "Алкоголь",
  "Рестораны, кафе",
  "Кино, театр",
  "Хозтовары",
  "Квартплата",
  "Бензин",
  "Парковка",
  "Мойка авто",
  "Проездной",
  "Разовые траты",
  "Интернет",
  "Мобильная связь",
  "Подарки",
  "Аптека",
  "Медицина"
]

hash_categories = []
 User.all.each do |user|
  rand(3..10).times do
    hash_categories << {
      user: user,
      name: categories.sample
    }
  end
end

Category.create! hash_categories


# Create tags 

Tag.destroy_all

tags = [
  "Мише",
  "Паше",
  "Саше",
  "Тане",
  "Пете",
  "Васе",
  "Славе",
  "Вале",
  "Кате"
]

hash_tags = []
 User.all.each do |user|
  rand(2..5).times do
    hash_tags << {
      user: user,
      name: tags.sample
    }
  end
end

Tag.create! hash_tags


# Create transactions

Transaction.destroy_all

transaction_hashes = []

User.all.each do |user|
  user.accounts.each do |account|
    rand(10..30).times do
      transaction_hashes << {
        account: account,
        category: user.categories.sample,
        tag: rand(2) == 1 ? user.tags.sample : nil,
        value: rand(-30000.0000..30000.0000)
      }
    end
  end
end

Transaction.create! transaction_hashes