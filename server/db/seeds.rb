puts "Create Users"
AdventureLocation.destroy_all
UserAdventure.destroy_all
User.destroy_all
User.create(username: 'Lucas', email: 'lucas@example.com', password: 'password1', profile_picture: '')
User.create(username: 'Josh', email: 'josh@example.com', password: 'password2', profile_picture: '')
User.create(username: 'Ahmad', email: 'ahmad3@example.com', password: 'password3', profile_picture: '')

puts "Create Adventures"
Adventure.destroy_all
Adventure.create(adventure_name: "Stanley Park's Enchanted Grove", 
adventure_description: "Explore Stanley Park's natural wonders, indigenous art, and scenic vistas. Start at the Totem Poles, stroll around the park, capture unforgetable views, and enjoy a pleasant walk. You may even find some treasure!",
duration: "60-90mins",
adventure_tag: 'Park', 
adventure_steps: [
  {
    stepNumber: 1,
    title: "Start at Totem Poles",
    description: "Begin your adventure at the famous Totem Poles in Stanley Park. These beautifully carved totems stand as a symbol of indigenous art and culture.",
    clues: [
      "Take a moment to appreciate the intricate details of the totem poles.",
      "Start walking along the path leading deeper into Stanley Park.",
    ],
  },
  {
    stepNumber: 2,
    title: "Lost Lagoon Trail",
    description: "Follow the Lost Lagoon Trail, where the tranquil waters of the lagoon reflect the surrounding greenery. Listen to the sounds of birds in this birdwatcher's paradise.",
    clues: [
      "Keep an eye out for bird species unique to Stanley Park.",
      "Continue your journey as the path winds through the park's diverse ecosystems.",
    ],
  },
  {
    stepNumber: 3,
    title: "Prospect Point",
    description: "As you walk further, you'll reach Prospect Point. From this viewpoint, you can admire the Lions Gate Bridge, Burrard Inlet, and the North Shore Mountains.",
    clues: [
      "Capture the breathtaking views with your camera.",
      "Descend the staircase towards the next part of your adventure.",
    ],
  },
  {
    stepNumber: 4,
    title: "Seawall Stroll",
    description: "Embark on a scenic stroll along the famous Seawall. Feel the refreshing ocean breeze as you pass by Siwash Rock, a striking natural formation.",
    clues: [
      "Siwash Rock is a sacred place for the indigenous people of this land.",
      "Continue along the Seawall with the ocean on one side and lush forests on the other.",
    ],
  },
  {
    stepNumber: 5,
    title: "Discovery of Siwash Treasure",
    description: "Your walk along the Seawall leads you to a secluded cove. There, partially submerged in the crystal-clear waters, you spot a treasure chest. Retrieve it from the cove's depths.",
    clues: [
      "The chest's design reflects the natural beauty of Stanley Park.",
      "As you open the chest, it reveals a collection of ancient golden coins.",
    ]
  }
], 
adventure_image: "images/stanley_park.png",
difficulty: 'Easy')
Adventure.create(adventure_name: 'Restocking Supplies', adventure_description: "N/A", adventure_tag: 'Grocery Store', adventure_steps: ['Step A', 'Step B', 'Step C'], adventure_image: 'images/supplies.jpg', difficulty: 'Medium')
Adventure.create(adventure_name: 'Learning Spells', adventure_description: "Uncover buried secrets at the Science World primal orb of learning. Journey to the gravity-defying perils of the Hive. Find solace and rejuvenation with an elixir of life in the welcoming realm of Mount Pleasant.", duration: '3 hours', adventure_tag: 'Library', adventure_steps: ['Step X', 'Step Y', 'Step Z'], adventure_image: 'images/spells.jpg',difficulty: 'Challenging')

puts "Create Locations"
Location.destroy_all
Location.create(location_name: 'Stanley Park', location_tag: 'Park', latitude: 49.299999, longitude: -123.139999)
Location.create(location_name: 'Safeway', location_tag: 'Grocery Store', latitude: 49.290802, longitude: -123.13504)
Location.create(location_name: 'Vancouver Public Library', location_tag: 'Library', latitude: 49.2797, longitude: -123.1156)

puts "Create Adventures completed by users"

UserAdventure.create(user_id: 1, adventure_id: 1, date: Time.now)
UserAdventure.create(user_id: 1, adventure_id: 2, date: Time.now)
UserAdventure.create(user_id: 2, adventure_id: 1, date: Time.now)
UserAdventure.create(user_id: 3, adventure_id: 3, date: Time.now)

puts "Create Adventures per location "

AdventureLocation.create(adventure_id: 1, location_id: 1)
AdventureLocation.create(adventure_id: 2, location_id: 2)
AdventureLocation.create(adventure_id: 3, location_id: 3)
