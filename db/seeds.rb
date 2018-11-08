# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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