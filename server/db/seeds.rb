puts "Create Users"
AdventureLocation.destroy_all
UserAdventure.destroy_all
User.destroy_all
User.create(username: 'Lucas', email: 'lucas@example.com', password: 'password1', profile_picture: '')
User.create(username: 'Josh', email: 'josh@example.com', password: 'password2', profile_picture: '')
User.create(username: 'Ahmad', email: 'ahmad3@example.com', password: 'password3', profile_picture: '')

puts "Create Adventures"
Adventure.destroy_all
Adventure.create(adventure_name: 'Barbarian Training', adventure_tag: 'Gym', adventure_steps: ['Step 1', 'Step 2', 'Step 3'], adventure_image: '',difficulty: 'Easy')
Adventure.create(adventure_name: 'Restocking Supplies', adventure_tag: 'Grocery Store', adventure_steps: ['Step A', 'Step B', 'Step C'], adventure_image: '', difficulty: 'Medium')
Adventure.create(adventure_name: 'Learning Spells', adventure_tag: 'Library', adventure_steps: ['Step X', 'Step Y', 'Step Z'], adventure_image: '',difficulty: 'challenging')

puts "Create Locations"
Location.destroy_all
Location.create(location_name: 'VPL', location_tag: 'Library', latitude: 49.2827, longitude: -123.1207)
Location.create(location_name: '24/7 Gym', location_tag: 'Gym', latitude: 49.2827, longitude: -123.1250)
Location.create(location_name: 'Safeway', location_tag: 'Grocery Store', latitude: 49.2827, longitude: -123.1150)

puts "Create Adventures completed by users"

UserAdventure.create(user_id: 1, adventure_id: 2, date: Time.now)
UserAdventure.create(user_id: 1, adventure_id: 3, date: Time.now)
UserAdventure.create(user_id: 2, adventure_id: 1, date: Time.now)
UserAdventure.create(user_id: 3, adventure_id: 3, date: Time.now)

puts "Create Adventures per location "

AdventureLocation.create(adventure_id: 1, location_id: 1)
AdventureLocation.create(adventure_id: 1, location_id: 2)
AdventureLocation.create(adventure_id: 2, location_id: 2)
AdventureLocation.create(adventure_id: 2, location_id: 3)
AdventureLocation.create(adventure_id: 3, location_id: 1)
AdventureLocation.create(adventure_id: 3, location_id: 3)
