# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

puts "Create Users"
User.destroy_all
User.create(username: 'Lucas', email: 'lucas@example.com', password: 'password1')
User.create(username: 'Josh', email: 'josh@example.com', password: 'password2')
User.create(username: 'Ahmad', email: 'ahmad3@example.com', password: 'password3')

puts "Create Adventures"
Adventure.destroy_all
Adventure.create(adventure_name: 'Barbarian Training', adventure_tag: 'Gym', adventure_steps: ['Step 1', 'Step 2', 'Step 3'])
Adventure.create(adventure_name: 'Restocking Supplies', adventure_tag: 'Grocery Store', adventure_steps: ['Step A', 'Step B', 'Step C'])
Adventure.create(adventure_name: 'Learning Spells', adventure_tag: 'Library', adventure_steps: ['Step X', 'Step Y', 'Step Z'])

puts "Create Locations"
Location.destroy_all
Location.create(location_name: 'VPL', location_tag: 'Library', latitude: 1234567, longitude: 9876543)
Location.create(location_name: '24/7 Gym', location_tag: 'Gym', latitude: 2345678, longitude: 8765432)
Location.create(location_name: 'Safeway', location_tag: 'Grocery Store', latitude: 3456789, longitude: 7654321)

puts "Create Adventures completed by users"
UserAdventure.destroy_all
UserAdventure.create(user_id: 1, adventure_id: 2, date: Time.now)
UserAdventure.create(user_id: 1, adventure_id: 3, date: Time.now)
UserAdventure.create(user_id: 2, adventure_id: 1, date: Time.now)
UserAdventure.create(user_id: 3, adventure_id: 3, date: Time.now)

puts "Create Adventures per location "
AdventureLocation.destroy_all
AdventureLocation.create(adventure_id: 1, location_id: 1)
AdventureLocation.create(adventure_id: 1, location_id: 2)
AdventureLocation.create(adventure_id: 2, location_id: 2)
AdventureLocation.create(adventure_id: 2, location_id: 3)
AdventureLocation.create(adventure_id: 3, location_id: 1)
AdventureLocation.create(adventure_id: 3, location_id: 3)
