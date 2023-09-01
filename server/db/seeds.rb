# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Create users!"
User.destroy_all
user_one = User.create(email: 'v@k.ca', password: '123456')
user_two = User.create(email: 'ab@c.ca', password: '123456')
user_three = User.create(email: 'john@gmail.ca', password: '123456')